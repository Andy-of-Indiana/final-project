import * as MODEL from "./model.js";

function start() {
    $(".gallerySubPages").css("display", "none");
    $(".blogSubPages").css("display", "none");
    $(".navWhite").css("display", "block");
    $(".navBlack").css("display", "none");
    $(".gallery").css("display", "none");
    $(".blog").css("display", "none");
}

function init() {
    $("nav a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Page";
        $(".gallerySubPages").css("display", "none");
        $(".blogSubPages").css("display", "none");

        if (btnID == "home") {
            $(".navWhite").css("display", "block");
            $(".navBlack").css("display", "none");
            $(".gallery").css("display", "none");
            $(".blog").css("display", "none");
        }
        else if (btnID == "gallery") {
            $(".navWhite").css("display", "none");
            $(".navBlack").css("display", "block");
            $(".gallery").css("display", "block");
            $(".blog").css("display", "none");
        }
        else if (btnID == "blog") {
            $(".navWhite").css("display", "none");
            $(".navBlack").css("display", "block");
            $(".gallery").css("display", "none");
            $(".blog").css("display", "block");
        }
        else {
            $(".navWhite").css("display", "none");
            $(".navBlack").css("display", "block");
            $(".gallery").css("display", "none");
            $(".blog").css("display", "none");
        }
        MODEL.getPageContent(contentID);
    });
    $("a.logo").click(function () {
        let btnID = this.id;
        let contentID = btnID + "Page";
        $(".gallerySubPages").css("display", "none");
        $(".blogSubPages").css("display", "none");
        $(".navWhite").css("display", "block");
        $(".navBlack").css("display", "none");
        $(".gallery").css("display", "none");
        $(".blog").css("display", "none");
        MODEL.getPageContent(contentID);
    });
    $(".galleryContent a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Page";
        $(".navWhite").css("display", "none");
        $(".navBlack").css("display", "block");
        $(".gallery").css("display", "none");
        $(".blog").css("display", "none");
        $(".gallerySubPages").css("display", "block");
        $(".blogSubPages").css("display", "none");
        MODEL.getGalleryPageContent(contentID);
    });
    $(".blogContent a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Page";
        $(".navWhite").css("display", "none");
        $(".navBlack").css("display", "block");
        $(".gallery").css("display", "none");
        $(".blog").css("display", "none");
        $(".gallerySubPages").css("display", "none");
        $(".blogSubPages").css("display", "block");
        MODEL.getBlogPageContent(contentID);
    });

}
$(document).ready(function () {
    start();
    init();
    MODEL.getPageContent("homePage");
});