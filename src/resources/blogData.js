const blog_posts = [
  {
    title: "Starting a blog!",
    date: "March 6th, 2022",
    type: "professional",
    content: (
      <>
        <h3>What's a blog?</h3>
        <p>
          A blog is an interesting idea. It allows you to communicate the things
          that you're doing, whether that be coding or eating a delicious
          dessert. I got the idea to start a blog from my research on AWS
          Serverless technologies. I saw this great YouTube video from a creator{" "}
          <b>Emily Shea</b>. Following the stream of info she put out, I landed
          on her personal webpage and thought:
        </p>

        <quote>Teaching people is a great way to teach yourself.</quote>

        <p>
          So I'm going to create a blog component. As I learn new things, I'll
          create posts to share with people the things I've learned, and get
          some awesome review as an additional bonus.
        </p>

        <h3>Things I'll write about.</h3>
        <p>
          I'll write a bit about everything, I suppose. I'd like to treat this
          like an extension to my journal - a way to communicate more openly
          about the things I think about.
        </p>
        <p>Here's a list of possible topics:</p>
        <ul>
          <li>Updates on my projects</li>
          <li>My guitar journey</li>
          <li>Vacations and cool places</li>
          <li>Important life updates</li>
          <li>Stories about friends</li>
          <li>Things I've learned</li>
        </ul>
        <p>
          <b>Cheers to new beginnings!</b>
        </p>
      </>
    ),
  },
  {
    title: "Helping Ukraine, UECC Ukrainian Center",
    date: "March 5th, 2022",
    type: "life",
    content: (
      <>
        <h3>Current Events</h3>
        <p>
          I'm not much of a person to watch the news on a regular basis, but
          when something as big as "Russia invades Ukraine" hits the airwaves,
          it's hard to avert your eyes. Russia began invading Ukraine on
          February 24, 2022, regretably making this the biggest conflict I will
          hope to ever see in my life.
        </p>

        <h3>My Ancestry</h3>
        <p>
          {" "}
          I'm a first generation Polish-American. My parents immigrated to the
          United States from Poland when they were 18 years old. Earlier than
          that, my Grandmother <b>Janina Ciuk </b>
          came in the 60's. They've had the ability to get a taste for two
          totally different societies and never fail to bring out the old "we
          walked for hours to get to school" type of sayings. They earned their
          badges though, because those times were in fact very different. It's
          for that same reason that the conflict between Russia and Ukraine is
          so prominent in my life.
        </p>
        <h3>Best Friends</h3>
        <p>
          My best friend <b>Thomas Duliban</b> has a similar background to my
          own. We met over a decade ago. At this point I can't even remember our
          origin story except the likelihood that our best friends
          <b> Thomasz, Dariusz, and Piotr Romanowski </b>
          had brought us together.
        </p>
        <p>
          Tom and I had been talking about the war while driving together to
          meet up with another close group of friends. I brought up that showing
          a Ukrainian flag is a nice show of solidarity, but it would be great
          to be able to help out more. He agreed, and then we continued to
          discuss the history of Eastern Europe. He's very knowledgable in
          history, and I always listen with open ears when he gets going.
        </p>
        <p>
          Tom saw a flier about an organization, UECC, getting involved to help
          the Ukrainian people. He reached out to me, asking if I'd like to come
          with him to pick up some things to donate, and I couldn't say no.
          Together, with the donations of 8 people, we bought supplies and
          donated them.
        </p>
        <p>
          <b>Big Thanks to:</b>
        </p>
        <ul>
          <li>Pawel and Magdalena Lapinski</li>
          <li>Tom Romanowski</li>
          <li>Piotr Romanowski</li>
          <li>Thomas and Monika Duliban</li>
          <li>Dalton Totaro</li>
          <li>Jul Lynn</li>
        </ul>

        <p>
          I encourage anyone that would like to get involved google "Help
          Ukraine ***Your City Name***". If you're in the Philadelphia area,
          visit{" "}
          <a href="https://www.ueccphila.org/" target="_blank" rel="noreferrer">
            UECC
          </a>{" "}
          and take a look to see if there's anything you can do.
        </p>
      </>
    ),
  },
];

export default function getBlogData() {
  return blog_posts;
}
