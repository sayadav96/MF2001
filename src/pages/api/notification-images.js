// api/notification-images.js

import { google } from "googleapis";

export default async function handler(req, res) {
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

    const folderId = process.env.GDRIVE_FOLDER_ID;

    // 2. Fetch Data
    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
      // FIX: Fetch 'id' and 'name' needed to construct the direct download link
      fields: "files(id, name)",
      orderBy: "createdTime desc",
    });

    // 3. Prevent Caching (Ensures automatic updates)
    res.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );

    // 4. Respond with Data
    res.status(200).json({ images: response.data.files });
  } catch (error) {
    console.error("Drive API Error:", error);
    res.status(500).json({ error: error.message });
  }
}