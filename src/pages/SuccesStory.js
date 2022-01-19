import React, { Component } from "react";
import Quicklinks from "../components/Quicklinks";

class SuccessStory extends Component {
  render() {
    return (
      <div>
        {/*quick links*/}
        <Quicklinks />
        {/*//quick links*/}
        <div className="page-content">
          {/*section*/}
          <div className="section mt-0">
            <div className="breadcrumbs-wrap">
              <div className="container">
                <div className="breadcrumbs">
                  <a href="index.html">Home</a>
                  <span>Success Stories</span>
                </div>
              </div>
            </div>
          </div>
          {/*//section*/}
          {/*section prices*/}
          <div className="section page-content-first">
            <div className="container">
              <div className="text-center mb-2 mb-md-3 mb-lg-4">
                <div className="h-sub theme-color">Before &amp; After</div>
                <h1>Weight Loss Success Stories</h1>
                <div className="h-decor" />
              </div>
              <p className="max-670 mx-auto text-center">
                Life-changing revelations can come when you least expect it.
                Check out these unexpected weight-loss lessons from people who
                have been battling their weight for decades.
              </p>
            </div>
            <div className="container mt-5 mt-md-8">
              <div className="before-after">
                <div className="before-after-image">
                  <img src="images/content/before-after-01.png" alt />
                </div>
                <div className="before-after-text">
                  <div className="before-after-label">
                    <span>Lost</span>
                    <span className="before-after-weight">60</span>
                    <span>Pounds</span>
                  </div>
                  <h5 className="before-after-name">
                    Loretta Walker <span>(32 y.o.)</span>
                  </h5>
                  <p>
                    My weight-loss journey has been a typical one where I have
                    battled my weight from my teenage years through adulthood.
                  </p>
                  <p>
                    Every now and then I would achieve success, but inevitably,
                    the weight came back, and it always came back in a greater
                    amount than I previously weighed. I considered the option of
                    weight-loss surgery for some years, and when I learned about
                    and researched the sleeve gastrectomy surgery, I knew I
                    might have finally found THE tool that could help me achieve
                    a goal that had plagued me for 20-plus years.{" "}
                  </p>
                </div>
                <div className="before-after-bg">
                  <img src="images/content/img-bg-before-after.png" alt />
                </div>
              </div>
              <div className="before-after before-after--reverse">
                <div className="before-after-image">
                  <img src="images/content/before-after-02.png" alt />
                </div>
                <div className="before-after-text">
                  <div className="before-after-label">
                    <span>Lost</span>
                    <span className="before-after-weight">120</span>
                    <span>Pounds</span>
                  </div>
                  <h5 className="before-after-name">
                    Mark Brewer <span>(37 y.o.)</span>
                  </h5>
                  <p>
                    Mark Brewer never really worked out and didn't eat
                    healthily, but thought he was fine as long as he didn't
                    weight 300 pounds. However, when he got to the point where
                    he did weigh 325 pounds, he knew something had to change.
                    "That's when it really hit me," he told us. But he didn't
                    quite know where to start in order to make a lasting impact
                    until one of his coworkers recommended getting a Fitbit.
                  </p>
                  <p>
                    The device and app helped Brewer create a calorie budget and
                    he also started going on daily walks with his wife.
                  </p>
                </div>
                <div className="before-after-bg">
                  <img src="images/content/img-bg-before-after.png" alt />
                </div>
              </div>
              <div className="before-after">
                <div className="before-after-image">
                  <img src="images/content/before-after-03.png" alt />
                </div>
                <div className="before-after-text">
                  <div className="before-after-label">
                    <span>Lost</span>
                    <span className="before-after-weight">42</span>
                    <span>Pounds</span>
                  </div>
                  <h5 className="before-after-name">
                    Sherry Greenwald <span>(22 y.o.)</span>
                  </h5>
                  <p>
                    What spurred her to lose weight: her health. Greenwald had
                    always been active and healthy, but as she got older and put
                    on weight, she developed high cholesterol and prediabetes.{" "}
                  </p>
                  <p>
                    But what really galvanized her efforts was seeing a photo:
                    “I went to a wedding in the south of France, and when I
                    looked at the picture of myself, I was mortified,” Greenwald
                    recalls. “I’d never thought of myself as being overweight,
                    but I looked heavy and aged.”
                  </p>
                </div>
                <div className="before-after-bg">
                  <img src="images/content/img-bg-before-after.png" alt />
                </div>
              </div>
              <div className="before-after before-after--reverse">
                <div className="before-after-image">
                  <img src="images/content/before-after-04.png" alt />
                </div>
                <div className="before-after-text">
                  <div className="before-after-label">
                    <span>Lost</span>
                    <span className="before-after-weight">105</span>
                    <span>Pounds</span>
                  </div>
                  <h5 className="before-after-name">
                    Janielle Wright <span>(19 y.o.)</span>
                  </h5>
                  <p>
                    After having her daughter, Janielle Wright failed to lose
                    the baby weight. While she was overweight before her the
                    birth of daughter, she felt that weighing 337 pounds at 5
                    feet 8 inches tall kept her from being the mother she wanted
                    to be.
                  </p>
                  <p>
                    Wright started intermittent fasting, where she fasted for 16
                    hours and ate during eight hours. She also added 30-minute,
                    high-intensity workouts to her routine. Since January, she
                    has lost 105 pounds.
                  </p>
                </div>
                <div className="before-after-bg">
                  <img src="images/content/img-bg-before-after.png" alt />
                </div>
              </div>
            </div>
            {/*//section*/}
          </div>
          {/*//section prices*/}
        </div>
      </div>
    );
  }
}
export default SuccessStory;
