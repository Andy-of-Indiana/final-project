//app
var homePage = `
<section class="home">
<div class="quoteSection">
  <div class="quote">
    <p>
      “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium totam rem aperiam eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Iste natus error sit voluptatem accusantium
      doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo”
    </p>
    <h5>John Smith</h5>
    <h6>Corporation CEO, books author.</h6>
  </div>
</div>
<div class="upcomingEventsSection">
  <div class="upcomingEventsTitle">
    <h2>UPCOMING ENENTS:</h2>
  </div>
  <div class="upcomingEventsContent">
    <div class="event">
      <div class="date">
        <h2>06</h2>
        <h3>JUN</h3>
      </div>
      <div class="eventWords">
        <h3>Sed et persipiatis</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </p>
      </div>
    </div>
    <div class="event">
      <div class="date">
        <h2>30</h2>
        <h3>JUL</h3>
      </div>
      <div class="eventWords">
        <h3>Sed et persipiatis</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </p>
      </div>
    </div>
    <div class="event">
      <div class="date">
        <h2>30</h2>
        <h3>AUG</h3>
      </div>
      <div class="eventWords">
        <h3>Sed et persipiatis</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </p>
      </div>
    </div>
    <div class="event">
      <div class="date">
        <h2>23</h2>
        <h3>NOV</h3>
      </div>
      <div class="eventWords">
        <h3>Sed et persipiatis</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </p>
      </div>
    </div>
    <div class="event">
      <div class="date">
        <h2>23</h2>
        <h3>DEC</h3>
      </div>
      <div class="eventWords">
        <h3>Sed et persipiatis</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </p>
      </div>
    </div>
  </div>
</div>
</section>
`;
var aboutPage = `
<section class="about">
<div class="aboutGreeter">
  <div class="aboutTitleImg"></div>
  <div class="aboutTitle">
    <h2>OUR HISTORY:</h2>
  </div>
</div>
<div class="aboutWords">
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
  </p>
</div>
</section>
`;
var galleryPage = `
`;
var blogPage = `
`;
var contactPage = `
<section class="contact">
<div class="contactSection">
  <div class="contactTitle">
    <h2>CONTACT US:</h2>
  </div>
  <div class="contactContent">
    <div class="contactInputs">
      <div class="contactForm">
        <div class="contactBoxSmall">
          <p>Your name…</p>
        </div>
        <div class="contactBoxSmall">
          <p>Email Address…</p>
        </div>
        <div class="contactBoxSmall">
          <p>Company…</p>
        </div>
        <div class="contactBoxLarge">
          <p>Message...</p>
        </div>
      </div>
      <div class="contactMap"></div>
    </div>
    <div class="contactButton">
      <a href="#">SEND MESSAGE</a>
    </div>
  </div>
</div>
</section>
`;
//galleryApp
var galleryYellowPage = `
<div class="gallerySubImg img1">
<div class="gallerySubTitle title1">
  <h1><span class="enlarge">1</span> food festival</h1>
</div>
</div>
`;
var galleryRedPage = `
<div class="gallerySubImg img2">
<div class="gallerySubTitle title2">
  <h1><span class="enlarge">2</span> dee-jay</h1>
</div>
</div>
`;
var galleryGreenPage = `
<div class="gallerySubImg img3">
<div class="gallerySubTitle title3">
  <h1><span class="enlarge">3</span> speech</h1>
</div>
</div>
`;
var galleryPurplePage = `
<div class="gallerySubImg img4">
<div class="gallerySubTitle title4">
  <h1><span class="enlarge">4</span> open foodfest</h1>
</div>
</div>
`;
var galleryBluePage = `
<div class="gallerySubImg img5">
<div class="gallerySubTitle title5">
  <h1><span class="enlarge">5</span> international</h1>
</div>
</div>
`;
//blogApp
var blogSub1Page = `
<h2>06</h2>
<h3>JUN</h3>
`;
var blogSub2Page = `
<h2>30</h2>
<h3>JUL</h3>
`;
var blogSub3Page = `
<h2>30</h2>
<h3>AUG</h3>
`;
var blogSub4Page = `
<h2>23</h2>
<h3>NOV</h3>
`;
var blogSub5Page = `
<h2>23</h2>
<h3>DEC</h3>
`;

export function getPageContent(pageID) {
    $("#app").html(eval(pageID));
}
export function getGalleryPageContent(pageID) {
  $("#galleryApp").html(eval(pageID));
}
export function getBlogPageContent(pageID) {
  $("#blogApp").html(eval(pageID));
}