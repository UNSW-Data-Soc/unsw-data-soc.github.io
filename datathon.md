---
layout: default
title: Welcome to DataSoc
---

<style>
details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: .5em .5em 0;
}

summary {
    font-size: 130%;
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
}

details[open] {
    padding: .5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: .5em;
}
</style>

<div class="pageloader"></div>
<div class="infraloader is-active"></div>        
<!-- Hero and Navbar -->
<div class="hero is-bold is-medium" style="background-image: url('/assets/images/datathon/background.png'); background-position: center; background-attachment: fixed; background-size: cover">
    <div class="hero-body">
        <div class="container" style="height:130px">
            <div class="has-text-centered">
                <a><img src="/assets/images/datathon/atlassian.png"
                    style="max-width:45%"></a>
            </div>
        </div>
        <div class="container">
            <div class="column has-text-centered is-hero-title">
                <h2 class="subtitle is-4 has-text-white">DataSoc x Atlassian Presents:</h2>
                <h1 class="title is-1 is-bigger has-text-white">Datathon 2020</h1> 
            </div>
            <p class="subtitle has-text-white has-text-centered">
                Saturday October 3 &mdash; Sunday October 4
                <br>
                Zoom and Slack
                <br><br>
                <a class="button is-rounded is-large is-inverted is-outlined is-black is-bold" href="#register">
                    Register Here!
                </a>
            </p>
        </div>
    </div>
</div>


<div class="hero-body">
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-three-quarters has-text-centered">
                <h3 class="subtitle is-4">
                    <br>
                    If you are looking to put your analytical and coding skills into practice, DataSoc is proud to present you our annual Datathon for 2020!
                    <br><br>This year, DataSoc has partnered up with Atlassian, and together we present to you an opportunity to experience what it is like to use the power of data to solve real-world problems while working alongside industry mentors from Atlassian, BCG, Accenture, Deloitte, EY, KPMG, Westpac, and UNSW data experts. 
                    <br><br>
                    <a class="button is-rounded is-medium is-outlined is-info is-bold" target="_blank" href="https://www.facebook.com/events/2691426797791998/?active_tab=discussion">Follow the Event on Facebook!</a>
                    <br><br>
                    You and your team will be given a real-world problem which you will have 24 hours to work on a presentation-ready solution to pitch your ideas to the judges.
                    <br><br>
                    Register with a team of up to 4, or register as an individual and we will place you into a team. Entry is free but spots are limited, so make sure to register below!
                    <br><br>
                </h3>
                <div class="columns">
                <div class="column">
                <a class="button is-rounded is-large is-info is-outlined is-bold" href="#faq">FAQs</a>
                </div>
                </div>
            </div> 
        </div>
    </div>
</div>


<section class="hero is-primary">
  <div class="hero-body" style="background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);">
    <div class="container">
        <div class="level-item">
            <h1 class="title">
                Prizes 
            </h1>
        </div>
    </div>
  </div>
</section>

<br><br>

<section class="container">
    <div class="columns features">
        <div class="column is-4">
            <div class="card is-shady ">
                <div class="card-content">
                    <div class="content">
                        <h4 class="has-text-centered">1st Place Prize </h4>
                        <li>$900 Cash</li>
                        <li>Coffee chat with senior Atlassian representative and potential fast-track to a role.</li>
                        <li>Atlassian Merch</li>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-4">
            <div class="card is-shady">
                <div class="card-content">
                    <div class="content">
                        <h4 class="has-text-centered">2nd Place Prize</h4>
                        <li>$600 Cash</li>
                        <li>Resume review with Atlassian senior campus recruiter </li>
                        <li>Atlassian Merch</li>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-4">
            <div class="card is-shady">
                <div class="card-content">
                    <div class="content">
                        <h4 class="has-text-centered"> 3rd Place Prize </h4>
                        <li>$300 Cash</li>
                        <li>Atlassian Merch</li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<br><br>

<section class="hero is-primary">
  <div class="hero-body" style=" background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);">
    <div class="container">
        <div class="level-item">
            <h1 class="title">
                Our Partners
            </h1>
        </div>
    </div>
  </div>
</section>

<div class="hero-body">
    <div class="container">
    <h3 class="subtitle is-4 has-text-centered">Our annual flagship datathon would not be possible without the support of our valuable partner companies. Special thanks goes out to Atlassian for sponsoring us and this event in particular!</h3><br>
    </div>
    <div class="section">
        <div class="container">
            <div class="columns is-vcentered">
                {% for i in site.data.datathon %}
                <div class="column">
                    <div class="sponsor_icon">
                        <a href="{{ i.link }}">
                            <img src="{{ i.icon }}">
                        </a>
                    </div>
                </div>
                {% endfor%}
            </div>
        </div>
    </div>
</div>

<section class="hero is-primary"  id="register">
  <div class="hero-body" style="background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);">
    <div class="container">
        <div class="level-item">
            <a id="register">
                <h1 class="title">
                    Register Here
                </h1>
            </a>
        </div>
    </div>
  </div>
</section>

<section>
<div class="container">
    <div class="columns is-centered">
        <div class="column is-three-quarters has-text-centered">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSesHqAO5sf5tOnTXnKjGKLG7GxCSlGtoNDRu0X30l63n2PuMA/viewform?embedded=true" width="700" height="780" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
</div>
</section>


    

<section class="hero is-primary" id="faq">
  <div class="hero-body" style=" background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);">
    <div class="container">
        <div class="level-item">
            <h1 class="title">
                FAQ
            </h1>
        </div>
    </div>
  </div>
</section>

<div class="hero-body">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-three-fifths is-offset-one-fifth">
                    <details>
                    <summary>
                        What is a datathon?
                    </summary>     
                        <p>
                        In a traditional datathon, competitors are to create a predictive model given a dataset and limited time spanning up to 24 hours. We will be providing a collection of datasets which should be used as part of your solution. You will also have the freedom to use any other data if you'd like to look around.
                        <br><br>
                        As for this year however, we have decided to structure our datathon as more of a case competition, with heavier weighting on evidence and reasoning behind the models alongside predictive accuracy.
                        </p>
                    </details>
                    <details>
                    <summary>
                        What can I expect?
                    </summary>     
                        <p>
                        To have fun and learn heaps!
                        </p>
                    </details>
                    <details>
                    <summary>
                        Can I enter alone/less than a full team?
                    </summary>     
                        <p>
                        Teams are up to 4 people - you can register with a pre-made team of up to 4, or register as an individual and be placed into a team.
                        </p>
                    </details>
                    <details>
                    <summary>
                        When will regos close?
                    </summary>     
                        <p>
                        Registrations close when we reach capacity, or at latest by Friday 27th September
                        </p>
                    </details>
                    <details>
                    <summary>
                        Does it cost me anything to join?
                    </summary>     
                        <p>
                        Absolutely not - this Datathon is completely free for students! In fact, DataSoc is committed to free opportunities and events for students interested in data analytics and machine learning!
                        </p>
                    </details>
                    <details>
                    <summary>
                        I've never done this before?! Can I still participate?
                    </summary>     
                        <p>
                        We’ve got your back!
                        To fully equip you with all the essential skills to success, we will provide you with all the support and guidance you will need. We will be holding a series of workshops and mentoring sessions on the day of Datathon and of course, there will also be 20+ industry mentors to provide you with one-on-one guidance!
                        </p>
                    </details>
                    <details>
                    <summary>
                        Should I join even if I have limited knowledge of modelling techniques?
                    </summary>     
                        <p>
                        YES! The question is designed to be accessible to entrants of all skill levels and technical backgrounds.
                        </p>
                    </details>
                    <details>
                    <summary>
                        Will we receive help during the datathon?
                    </summary>     
                        <p>
                        YES! We have lined up workshops and industry mentors to help guide you through even if you have 0 experience.
                        </p>
                    </details>
                    <details>
                    <summary>
                       Where can I find out more info about the event?
                    </summary>     
                        <p>
                        For regular updates, make sure to click "Going" on the <a href="https://www.facebook.com/events/2691426797791998">Facebook Event</a> and follow us on our socials!
                        </p>
                    </details>
                    <details>
                    <summary>
                        How will we be judged?
                    </summary>     
                        <ul>
                            <li>Appropriateness of solution for the given problem statement.</li>
                            <li>Rigour of data collection, analysis, and interpretation.</li>
                            <li>Value and impact of solution.</li>
                            <li>Feasibility and suitability of solution.</li>
                            <li>Creativity.</li>
                            <li>Clarity and quality of presentation.</li>
                        </ul>
                    </details>
            </div>
        </div>
    </div>
</div>