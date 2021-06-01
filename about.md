---
layout: landing
title: About Us
subtitle: What we really do.
title-image: city3_left.png
introduction: |
  At DataSoc, our goal is to discover how data shapes the world around us. 
  <br><br> 
  As the official student body for the Data Science and Decisions program at UNSW, we are one of UNSW's fastest growing societies in one of the world's fastest growing industries.
  <br><br>
  We aspire to connect, educate and support our members by running social and career events alongside industry partnered educational workshops.
---

<style>
.timeline {
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

/*----- TIMELINE ITEM -----*/
.timeline-item {
  padding-left: 40px;
  position: relative;
}
.timeline-item:last-child {
  padding-bottom: 0;
}

/*----- TIMELINE INFO -----*/
.timeline-info {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 .5em 0;
  text-transform: uppercase;
  white-space: nowrap;
}

/*----- TIMELINE MARKER -----*/
.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
}
.timeline-marker:before {
  background: #4bb8eb;
  border: 3px solid transparent;
  border-radius: 100%;
  content: "";
  display: block;
  height: 15px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
}
.timeline-marker:after {
  content: "";
  width: 3px;
  background: #CCD5DB;
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 6px;
}
.timeline-item:last-child .timeline-marker:after {
  content: none;
}

.timeline-item:not(.period):hover .timeline-marker:before {
  background: transparent;
  border: 3px solid #4bb8eb;
}

/*----- TIMELINE CONTENT -----*/
.timeline-content {
  padding-bottom: 40px;
}
.timeline-content p:last-child {
  margin-bottom: 0;
}

/*----- TIMELINE PERIOD -----*/
.period {
  padding: 0;
}
.period .timeline-info {
  display: none;
}
.period .timeline-marker:before {
  background: transparent;
  content: "";
  width: 15px;
  height: auto;
  border: none;
  border-radius: 0;
  top: 0;
  bottom: 30px;
  position: absolute;
  border-top: 3px solid #94158b;
  border-bottom: 3px solid #94158b;
}
.period .timeline-marker:after {
  content: "";
  height: 32px;
  top: auto;
}
.period .timeline-content {
  padding: 40px 0 70px;
}
.period .timeline-title {
  margin: 0;
}

@media (min-width: 992px) {
  .timeline-centered,
  .timeline-centered .timeline-item,
  .timeline-centered .timeline-info,
  .timeline-centered .timeline-marker,
  .timeline-centered .timeline-content {
    display: block;
    margin: 0;
    padding: 0;
  }
  .timeline-centered .timeline-item {
    padding-bottom: 40px;
    overflow: hidden;
  }
  .timeline-centered .timeline-marker {
    position: absolute;
    left: 50%;
    margin-left: -7.5px;
  }
  .timeline-centered .timeline-info,
  .timeline-centered .timeline-content {
    width: 50%;
  }
  .timeline-centered > .timeline-item:nth-child(odd) .timeline-info {
    float: left;
    text-align: right;
    padding-right: 30px;
  }
  .timeline-centered > .timeline-item:nth-child(odd) .timeline-content {
    float: right;
    text-align: left;
    padding-left: 30px;
  }
  .timeline-centered > .timeline-item:nth-child(even) .timeline-info {
    float: right;
    text-align: left;
    padding-left: 30px;
  }
  .timeline-centered > .timeline-item:nth-child(even) .timeline-content {
    float: left;
    text-align: right;
    padding-right: 30px;
  }
  .timeline-centered > .timeline-item.period .timeline-content {
    float: none;
    padding: 0;
    width: 100%;
    text-align: center;
  }
  .timeline-centered .timeline-item.period {
    padding: 50px 0 90px;
  }
  .timeline-centered .period .timeline-marker:after {
    height: 30px;
    bottom: 0;
    top: auto;
  }
  .timeline-centered .period .timeline-title {
    left: auto;
  }

    ul.no_bullet {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li.lightbulb {
        background: url('/assets/images/icons/coloured/lightbulb_idea.png') no-repeat left top;
        height: 104px;
        padding-left: 104px;
        padding-top: 8px;
    }

    li.mice {
        background: url('/assets/images/icons/coloured/graphic_design.png') no-repeat left top;
        height: 104px;
        padding-left: 104px;
        padding-top: 8px;
    }
    
    li.jobboard {
        background: url('/assets/images/icons/coloured/bulletin_board.png') no-repeat left top;
        height: 104px;
        padding-left: 104px;
        padding-top: 8px;
    }

    li.zoom {
        background: url('/assets/images/icons/coloured/zoom.png') no-repeat left top;
        height: 104px;
        padding-left: 104px;
        padding-top: 8px;
    }

    li.palette {
        background: url('/assets/images/icons/coloured/art_palette.png') no-repeat left top;
        height: 104px;
        padding-left: 104px;
        padding-top: 8px;
    }
    
    li.book {
        background: url('/assets/images/icons/coloured/book.png') no-repeat left top;
        height: 104px;
        padding-left: 104px;
        padding-top: 8px;
    }
    
    li.coffee {
        background: url('/assets/images/icons/coloured/coffee.png') no-repeat left top;
        height: 104px;
        padding-left: 104px;
        padding-top: 8px;
    }
    
    li.thumbs_up {
        background: url('/assets/images/icons/coloured/thumbs_up.png') no-repeat left top;
        height: 104px;
        padding-left: 104px;
        padding-top: 8px;
    }
    
    li.sunglasses {
        background: url('/assets/images/icons/coloured/sunglasses.png') no-repeat left top;
        height: 104px;
        padding-left: 104px;
        padding-top: 8px;
    }
}

</style>

<div class="hero-body">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-6">
                <a><img class="partner-logo" src="/assets/images/logos/custom/unswmaths.png"></a>
            </div>
            <div class="column is-5 is-offset-1">
                <p>Uniting mathematicians, econometricians and computer scientists, UNSW Datasoc seeks to empower our members with knowledge and skills of data science, machine learning and artificial intelligence.</p>
            </div>
        </div>
    </div>
</div>

<section class="hero is-primary">
  <div class="hero-body" style=" background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);">
    <div class="container">
        <div class="level-item">
            <h1 class="title">
                Our Goals
            </h1>
        </div>
    </div>
  </div>
</section>

<div class="hero-body">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-7 is-offset-3">
                <ul class="no_bullet">
                    <li class="lightbulb">
                        DataSoc aims to become Australia’s leading student run society platform in assisting students on achieving their data science career goals.
                        <br><br>
                    </li>
                    <li class="jobboard">
                        We strive to create the data science related opportunities for students in their studies and careers alike. We host information sessions, networking evenings, and many more career-focused events that could help open new pathways for students.
                        <br><br>
                    </li>
                    <li class="mice">
                        We aim to enrich students' lives with a sense of community and diversity among UNSW data science students. We host a list of various social activities such as BBQs, competitions, etc. that welcome everyone to attend and meet like minded people.
                        <br><br>
                    </li>
                    <li class="zoom">
                        We want to support data science students in their studies with DataSoc’s help sessions, workshops and peer supporters. 
                        <br><br>
                    </li>
                    <p>
                    With this, DataSoc aims to make your university experience even more fun and fulfilling, whilst maximizing your employment opportunity and career progression in data science.
                    </p>     
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="card column is-7 is-offset-3">
  <div class="card-content">
    <p class="title has-text-centered">
      "Opportunities don't happen. You create them."
    </p>
  </div>
</div>

<br><br><br>


<section class="hero is-primary">
  <div class="hero-body" style=" background-color: #21D4FD;
background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);">
    <div class="container">
        <div class="level-item">
            <h1 class="title">
                Our Values
            </h1>
        </div>
    </div>
  </div>
</section>

<div class="hero-body">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-7 is-offset-3">
                Our successes to date could not have be achieved without our thriving subcommittee teams year after year. Here are our core values that persists amongst all portfolios. <br><br>
                <ul class="no_bullet">
                    <li class="book">
                        <p><strong>Learn continuously and effectively</strong></p>
                        We seek to provide innovative and meaningful experiences for students, adapting to change and committing to ongoing development. We highly encourage you to actively seek ways to improve and find new ways to solve problems.
                        <br><br>
                    </li>
                    <li class="coffee">
                        <p><strong>Have a good time</strong></p>
                        At DataSoc, it is important to us that every experience here is a constructive and positive one. After every event and every meeting, we want you all to be leaving with a smile and a new friend!
                        <br><br>
                    </li>
                    <li class="thumbs_up">
                        <p><strong>Be the best at what you do</strong></p>
                        What distinguishes DataSoc members from others, despite having all different areas and expertise? It's the passion that we bring to everything we do. We approach every task with confidence, seize all opportunities and never settle for "acceptable".
                        <br><br>
                    </li>
                    <li class="sunglasses">
                        <p><strong>Take ownership and be transparent</strong></p>
                        As the DataSoc team, we celebrate the individual work and achievement of others, but must also be accountable for the tasks to which we have committed and see through what we started.
                        <br><br>
                    </li> 
                </ul>
            </div>
        </div>
    </div>
</div>

<br>

<section class="hero is-primary">
  <div class="hero-body" style="background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);">
    <div class="container">
        <div class="level-item">
            <h1 class="title">
                Our History
            </h1>
        </div>
    </div>
  </div>
</section>
  <div class="container-fluid">
    <br><br>
      <div class="column is-8 is-offset-2">
          <div class="row example-centered">
              <ul class="timeline timeline-centered">
                  <li class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="title is-4">April, 2017</h3>
                          <p>DataSoc was founded along side its very first iteration of the official website!</p>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="title is-4">May, 2017</h3>
                          <p>DataSoc announces and hosts its first ever event: 
                          <br>
                          Meet the representatives of Tableau Software, and get to know the power of Tableau in AI and modern data science. </p>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="title is-4">June, 2017</h3>
                          <p>DataSoc hosts its first ever hackathon, and its first ever networking night with Alibaba, Suncorp, Bupa, and many more. </p>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="title is-4">August, 2017</h3>
                          <p>Official DataSoc youtube announced. Since then, many videos covering the topics of AI and machine learning has been uploaded!</p>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="title is-4">March, 2018</h3>
                          <p>DataSoc celebrates 1000 likes and 1000+ follows on Facebook! This month also marks the beginning of DataSoc's Weekly Data Discoveries tradition that continues to this day in our newsletters!</p>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="title is-4">September, 2018</h3>
                          <p> Welcomed SKYnet, DataSoc's friendly chatbot helper, ready to answer questions on DataSoc's behalf.</p>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="title is-4">March, 2019</h3>
                          <p>DataSoc's website undergoes a modern transformation as we welcome new members and a doubled subcommitee team alike.
                          </p>
                      </div>
                  </li>
                  <li class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                          <h3 class="title is-4">September, 2019</h3>
                          <p>In this month, as DataSoc celebrated its 2000 likes on Facebook, DataSoc hosted its first ever international datathon in conjunction with Tsinghua University's Institute of Data Science!
                          </p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>

