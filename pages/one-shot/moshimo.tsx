import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Moshimo: NextPage = () => {
  const router = useRouter();
  const { one_shot_rd_code } = router.query;

  useEffect(() => {
    const storeAndRedirect = async () => {
      if (typeof one_shot_rd_code === "string") {
        sessionStorage.setItem("one_shot_rd_code", one_shot_rd_code);
      }

      // 保存前にリダイレクトすると保存されないので、保存されたことを確認するまで待つ
      let attempts = 0;
      const intervalId = setInterval(() => {
        attempts++;
        const item = sessionStorage.getItem("one_shot_rd_code");

        if (item || attempts >= 3) {
          clearInterval(intervalId);
          router.push("https://one.uwear.jp/");
        }
      }, 1000);
    };

    storeAndRedirect();
  }, [one_shot_rd_code, router]);

  return <></>;
};

export default Moshimo;
