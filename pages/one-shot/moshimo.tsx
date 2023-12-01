import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Moshimo: NextPage = () => {
  const router = useRouter();
  const { rd_code } = router.query;
  useEffect(() => {
    if (rd_code && rd_code === "string") {
      sessionStorage.setItem("one_shot_rd_code", rd_code);
    }
    router.push("https://one.uwear.jp/");
  }, [rd_code, router]);
  return <></>;
};

export default Moshimo;
