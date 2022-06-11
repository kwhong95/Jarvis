import { useRef } from "react";
import * as htmlToImage from "html-to-image";

const createFileName = (extension = "", ...names: any[]) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};

const useScreenCapture = () => {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const ariaElement = document.getElementById("#capture-area");

  const takeScreenShot = async (node: any) => {
    console.log(node);
    const dataURI = await htmlToImage.toJpeg(node);
    return dataURI;
  };

  const download = (
    image: string,
    { name = "img", extension = "jpg" } = {}
  ) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  // TODO : error handling
  const downloadScreenShot = () =>
    takeScreenShot(screenRef.current).then(download);

  return { screenRef, downloadScreenShot, ariaElement };
};

export default useScreenCapture;
