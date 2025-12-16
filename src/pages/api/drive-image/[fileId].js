// pages/api/drive-image/[fileId].js
import { google } from "googleapis";

export default async function handler(req, res) {
  const { fileId } = req.query;

  if (!fileId) {
    return res.status(400).send("Missing file ID");
  }

  try {
    // 1. Authentication
    const auth = new google.auth.JWT({
      email: process.env.GDRIVE_CLIENT_EMAIL,
      key: process.env.GDRIVE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });

    const drive = google.drive({
      version: "v3",
      auth,
    });

    // 2. Fetch the file content (The Service Account ensures access)
    const file = await drive.files.get(
      {
        fileId: fileId,
        alt: "media", // This parameter is crucial for getting the file content
      },
      { responseType: "stream" }
    );

    // 3. Set Image Headers and Pipe the Stream
    // A Service Account fetch should automatically handle the full quality.
    res.setHeader("Content-Type", file.headers["content-type"] || "image/jpeg");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable"); // Cache aggressively once the image is confirmed

    file.data.pipe(res);
  } catch (error) {
    console.error(`Error streaming file ${fileId}:`, error.message);
    // Send a 404 or a 500 status on failure
    res.status(error.code || 500).send("Could not retrieve image.");
  }
}
