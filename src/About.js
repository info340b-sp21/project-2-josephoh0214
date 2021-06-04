import React from 'react';

export function AboutPage() {
    return (
        <div>
            {/* First section: Mission for our website */}
            <section>
                <div className="mission">
                    <h2>Mission</h2>
                    <p>To promote healthy choices through nutritional transparency while enjoying beverages from Starbucks.</p>
                </div>
            </section>

            {/* Second section: Description for our website */}
            <section>
                <div className="description">
                    <h2>What's in your drink?</h2>
                    <p>
                        All about your Starbucks Drink is an information sorting tool that gives users the
                        nutritional values of starbucks drinks. All data used is collected from the publically
                        available starbucks database. By creating a design where important information is
                        easily accessible, we hope to shape a user's decision to a more healthier choice.
                    </p>

                    <div className="video-container">
                        <iframe className="video" src="https://www.youtube.com/embed/SLGI_ozBjsw"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </section>

            {/* Third section: Author Info of our website */}
            <section>
                <div className="authorInfo">
                    <h2>Who are we?</h2>
                    <div className="about-container-wrapper">
                        <div className="card">
                            <img src="img/photo_Jiyeong.JPG" alt="Jiyeong Kang" />
                            <h3>Jiyeong Kang</h3>
                            <address>
                                Email: <a href="jikang@uw.edu">jikang@uw.edu</a>.
                        </address>
                        </div>
                        <div className="card">
                            <img src="img/joseph.jpg" alt="Joseph Oh" />
                            <h3>Joseph Oh</h3>
                            <address>
                                Email: <a href="ohjs3089@uw.edu">ohjs3089@uw.edu</a>.
                        </address>
                        </div>
                        <div className="card">
                            <img src="img/Joe.jpg" alt="Joseph Aktanura" />
                            <h3>Joseph Altamira</h3>
                            <address>
                                Email: <a href="jrda@uw.edu">jrda@uw.edu</a>.
                        </address>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}