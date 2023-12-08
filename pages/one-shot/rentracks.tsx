import { NextPage } from "next";
import { useRouter } from "next/router";
import Script from "next/script";

const Rentracks: NextPage = () => {
  const router = useRouter();

  return (
    <Script
      id="rentracks-lp-tag"
      strategy="afterInteractive"
      onLoad={() => router.push("https://one.uwear.jp/")}
    >
      {`(function(callback){
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://www.rentracks.jp/js/itp/rt.track.js?t=" + (new Date()).getTime();
if ( script.readyState ) {
script.onreadystatechange = function() {
if ( script.readyState === "loaded" || script.readyState === "complete" ) {
script.onreadystatechange = null;
callback();
}
};
} else {
script.onload = function() {
callback();
};
}
document.getElementsByTagName("head")[0].appendChild(script);
}(function(){}));`}
    </Script>
  );
};

export default Rentracks;
