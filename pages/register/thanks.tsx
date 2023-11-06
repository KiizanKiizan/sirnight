import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import { LinkButton } from "../../src/components/baseParts/LinkButton";

const Thanks: NextPage = () => {
  const [memberId, setMemberId] = useState<number>();
  const { memberId: memberIdQuery } = useRouter().query;

  // ユーザーIDをクエリパラメータから取得
  useEffect(() => {
    if (Array.isArray(memberIdQuery)) {
      setMemberId(undefined);
    } else {
      setMemberId(Number(memberIdQuery) ?? undefined);
    }
  }, [memberIdQuery]);

  return (
    <div>
      <NextSeo title="会員登録完了" />
      <div id="container" className="inset-0 h-full min-h-screen text-themeGray">
        <h2 className="py-12 text-center text-3xl font-bold">会員登録完了</h2>
        <div className="px-6">
          <p className="text-sm">
            会員登録ありがとうございます！
            <br />
            メールを送付しましたので、ご確認をお願い致します。
          </p>
          <p className="mt-8 text-sm">
            UWearではスタイリストへの相談、料金プラン変更、返却など全てLINEから行います。
            <br />
            お手数ですが下記からご登録をお願い致します。
          </p>
          <div className="text-center">
            <LinkButton
              href={`${process.env.NEXT_PUBLIC_HOST_URL}/line_login/authorize?tp=Xu7KVD8d`}
              className="mt-12"
            >
              LINEでスタイリストを友達追加する
            </LinkButton>
          </div>
        </div>
      </div>
      {/* Rentracksコンバージョンタグ */}
      {memberId && (
        <Script id="rentracks-cv-tag" strategy="afterInteractive">
          {`(function(){
       function loadScriptRTCV(callback){
       var script = document.createElement('script');
       script.type = 'text/javascript';
       script.src = 'https://www.rentracks.jp/js/itp/rt.track.js?t=' + (new Date()).getTime();
       if ( script.readyState ) {
       script.onreadystatechange = function() {
       if ( script.readyState === 'loaded' || script.readyState === 'complete' ) {
       script.onreadystatechange = null;
       callback();
       };
       };
       } else {
       script.onload = function() {
       callback();
       };
       };
       document.getElementsByTagName('head')[0].appendChild(script);
       }
       
       loadScriptRTCV(function(){
       _rt.sid = 1847;
       _rt.pid = 2838;
       _rt.price = 0;
       _rt.reward = -1;
       _rt.cname = '';
       _rt.ctel = '';
       _rt.cemail = '';
       _rt.cinfo = ${memberId};
       rt_tracktag();
       });
       }(function(){}))`}
        </Script>
      )}
      {/* もしもアフィリエイトコンバージョンタグ */}
      {memberId && sessionStorage.getItem("rd_code") && (
        <img
          src={`https://r.moshimo.com/af/r/result?p_id=1063&pc_id=1537&m_v=${memberId}&rd_code=${sessionStorage.getItem(
            "rd_code",
          )}`}
          width="1"
          height="1"
          alt=""
        />
      )}
      {/* モッピートラッキングタグ */}
      {memberId && (
        <>
          <Script
            src="https://ad-track.jp/ad/js/cv.js"
            onLoad={() => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              adtrack_cv.cv(
                "adm_adtr_xuid",
                "https://ad-track.jp/ad",
                `_buyer=22636&_article=21513&_price=&_buid=${memberId}&key1=`,
              );
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img src="https://ad-track.jp/ad/p/cv?_buyer=22636&_article=21513&_price=&_buid=${memberId}&key1=" width="1" height="1">`,
            }}
          />
        </>
      )}
    </div>
  );
};
export default Thanks;
