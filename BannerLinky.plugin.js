/**
 * @name LinkBanneru
 * @author FedeU
 * @version 1.0.0
 * @description Povolí ti kliknout na banner uživatele a otevře ti jej v kartě na prohlížeči
 * @website https://github.com/FedeU-420
 */

module.exports = class LinkBanner {
    start() {
        document.addEventListener("click", this.link)
    }
    stop() {
        document.removeEventListener("click", this.link)
    }
    link({target}) {
        if (target.style.backgroundImage && target.style.backgroundImage.includes("banner")) {
            let url = target.style.backgroundImage
            url = url.substring(4, url.length-1).replace(/["']/g, "")
            url = url.replace(/(?:\?size=\d{3,4})?$/, "?size=4096")
            window.open(url)
        }
    }
}
