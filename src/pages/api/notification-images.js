// import { google } from "googleapis";

// export default async function handler(req, res) {
//   try {
//     console.log("GDRIVE_CLIENT_EMAIL: ", process.env.GDRIVE_CLIENT_EMAIL);
//     console.log("GDRIVE_PRIVATE_KEY: ", process.env.GDRIVE_PRIVATE_KEY);
//     const auth = new google.auth.JWT(
//       process.env.GDRIVE_CLIENT_EMAIL,
//       null,
//       process.env.GDRIVE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//       ["https://www.googleapis.com/auth/drive.readonly"]
//     );

//     const drive = google.drive({ version: "v3", auth });

//     const folderId = process.env.GDRIVE_FOLDER_ID;
//     console.log("folderId: ", folderId);

//     const response = await drive.files.list({
//       q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
//       fields: "files(id, name, mimeType, webContentLink, thumbnailLink)",
//       orderBy: "createdTime desc",
//     });

//     res.status(200).json({ images: response.data.files });
//   } catch (error) {
//     console.error("Drive API Error:", error);
//     res.status(500).json({ error: error.message });
//   }
// }


import { google } from "googleapis";

export default async function handler(req, res) {
  try {
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

    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
      fields: "files(id, name, thumbnailLink, webViewLink)",
      orderBy: "createdTime desc",
    });

    res.status(200).json({ images: response.data.files });
  } catch (error) {
    console.error("Drive API Error:", error);
    res.status(500).json({ error: error.message });
  }
}

