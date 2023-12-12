import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Rentracks: NextPage = () => {
  const router = useRouter();
  const { rtsp } = router.query;

  useEffect(() => {
    const storeAndRedirect = async () => {
      if (typeof rtsp === "string") {
        sessionStorage.setItem("rtsp", rtsp);
      }

      // 保存前にリダイレクトすると保存されないので、保存されたことを確認するまで待つ
      let attempts = 0;
      const intervalId = setInterval(() => {
        attempts++;
        const item = sessionStorage.getItem("rtsp");

        if (item || attempts >= 3) {
          clearInterval(intervalId);
          router.push("https://one.uwear.jp/");
        }
      }, 1000);
    };

    storeAndRedirect();
  }, [rtsp, router]);

  return <></>;
};

export default Rentracks;
