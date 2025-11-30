// import Cosmic from "cosmicjs";

// const BUCKET_SLUG =
//   process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG || process.env.COSMIC_BUCKET_SLUG;
// const READ_KEY =
//   process.env.NEXT_PUBLIC_COSMIC_READ_KEY || process.env.COSMIC_READ_KEY;

// console.log("loging env variable", BUCKET_SLUG);
// console.log("loging env variable", READ_KEY);

// const bucket = Cosmic().bucket({
//   slug: BUCKET_SLUG,
//   read_key: READ_KEY,
// });

// const is404 = (error) => /not found/i.test(error.message);

// export async function getAllDataWithSlug() {
//   const params = {
//     type: "menu",
//     props: "slug",
//   };
//   const data = await bucket.getObjects(params);
//   return data.objects;
// }

// export async function getDataFromBucket(preview) {
//   const params = {
//     type: "header",
//     props: "title,slug,metadata,created_at",
//     sort: "-created_at",
//     ...(preview && { status: "all" }),
//   };
//   const data = await bucket.getObjects(params);
//   return data.objects;
// }

// src/lib/api.js
// src/lib/api.js

import { headerData } from "../data/headerData";
import { menuData } from "../data/menuData";

// previously this hit Cosmic and returned data.objects
export async function getAllDataWithSlug() {
  // This is used for dynamic [slug] pages – it only needs slug
  return menuData.map((item) => ({ slug: item.slug }));
}

// previously this loaded 'header' objects from Cosmic
export async function getDataFromBucket(preview) {
  // If your homepage expects an array of headers, just return our array.
  // You can add more header objects in headerData if needed.
  return headerData;
}
