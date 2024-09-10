import api from "../api-services/data";
import Image from "next/image";

//get photos from API
async function fetchPhotos() {
  try {
    const res = await api.get("/photos");

    return res.data;
  } catch (error) {
    throw new Error("API failed: photos fetch failed");
  }
}

async function page() {
  const photos = await fetchPhotos();
  return (
    <>
      <div className="grid grid-cols-8 gap-2">
        {photos.map((photo) => {
          return (
            <figure key={photo.id}>
              <Image
                width={200}
                height={200}
                src={photo.thumbnailUrl}
                alt={photo.title}
              />
              <figcaption>{photo.title}</figcaption>
            </figure>
          );
        })}
      </div>
    </>
  );
}

export default page;
