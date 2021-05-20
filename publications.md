---
layout: default
title: Publications
subtitle: Keep up with Datasoc in the wider community!
title-image: city3_left.png
introduction: You can find all of our publications here!
---
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BJ4JGEM1JH"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-BJ4JGEM1JH');
</script>

<!-- Introduction -->
<section class="hero is-light is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{ page.title }}
      </h1>
      <h2 class="subtitle">
        {{ page.introduction }} 
      </h2>
    </div>
  </div>
</section>
  <nav class="navbar is-white">
      <div class="container">
          <div id="navMenu" class="navbar-menu">
              <div class="navbar-start">
                  <a class="navbar-item" href="/contact">
                    Newsletter Signup
                  </a>
                  <a class="navbar-item" href="https://us19.campaign-archive.com/home/?u=8dc568d0db37b26ed75ba4d94&id=01f8128da2" target="_blank"> 
                    Newsletter Archive
                  </a>
              </div>
          </div>
      </div>
  </nav>
<div class="hero-body">
  <div class="container">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="columns featured-post is-multiline">
            <div class="column is-12 post">
              <article class="columns featured">
                <h3 class="heading post-category">Guides</h3>
                <div class="column is-6 featured-content va centered"> 
                  <h1 class="title post-title">2021 Careers Guide</h1>
                    <p class="post-excerpt">
                    Data Science can be difficult to navigate career-wise. 
                    <br><br>
                    If you're looking for a place to start, some extra information, and some guidance 
                    from experienced professionals, have a check out of Careers Guide!
                    </p>
                    <br>
                    <a href="careers-guide" class="button is-primary">View</a>
                    <br>
                </div>
                <div class="column is-6 featured-content va centered">
                  <div>
                    <h1 class="title post-title">2021 First Year Guide</h1>
                    <p class="post-excerpt">UNSW has a whole host of different experiences and opportunities, 
                      so much so that it can feel super daunting and confusing. <br><br> If this is how you feel (and even if it’s not) 
                      - this First Year Guide is for you! </p>
                    <br>
                    <a href="first-year-guide" class="button is-primary">View</a>
                    <br> 
                  </div>
                </div>
              </article>
            </div>
          </div>
          <hr>
          <div class="columns is-multiline">
            {% for news in site.data.newsletters.News limit:2 %}
            <div class="column post is-6">
              <article class="columns is-multiline">
                <div class="column is-12 post-img">
                  <figure class="image is-16by9">
                    <img src="{{ news.image }}" alt="Featured Image">
                  </figure>
                </div>
                <div class="column is-12 featured-content ">
                  <h3 class="heading post-category">Newsletter</h3>
                  <h1 class="title post-title">{{ news.name }} </h1>
                  <p class="post-excerpt"> {{ news.excerpt }} </p>
                  <br>
                  <a href="{{ news.link }}" target="_blank" class="button is-primary">Read More</a>
                </div>
              </article>
            </div>
            {% endfor %}
            {% for news in site.data.newsletters.News offset:2 limit:30 %}
            <div class="column post is-4">
              <article class="columns is-multiline">
                <div class="column is-12 post-img">
                  <figure class="image is-16by9">
                    <img src="{{ news.image }}" alt="Featured Image">
                  </figure>
                </div>
                <div class="column is-12 featured-content ">
                  <h3 class="heading post-category">Newsletter</h3>
                  <h1 class="title post-title">{{ news.name }}</h1>
                  <p class="post-excerpt">{{ news.excerpt }} <br> </p>
                  <br>
                  <a href="{{ news.link }}" target="_blank" class="button is-primary">Read More</a>
                </div>
              </article>
            </div>
            {% endfor %}
          </div>
        </div>
      </div>
  </div>
</div>