---
layout: page
title: Our Sponsors
title-image: city3_left.png
introduction: |
  DataSoc wouldn't be DataSoc without the amazing companies we've worked with throughout our journey as a society.
  <br><br>
  We really appreciate the support in helping our members develop skills and knowledge across a variety of disciplines, so that they are industry-ready come graduation.
  <br><br>
  With more and more data-oriented decisions and predictions made everyday, the demand for talented Data Science graduates is growing.
  <br><br>
  It's our long term goal to help our members become as capable they can be, and it wouldn't be possible without the continued support from industry.
  <br><br>
  **Interested in sponsoring? Reach out at [external@unswdata.com](mailto:external@unswdata.com)**
---
<div class="hero-body">
  <!--Sponsors -->
  {% for tier in site.data.sponsors %}
  <div class="section">
    <div class="container">
      <div class="section-title-wrapper">
        <h2 class="title is-1 centered">{{ tier[0] }}</h2>
          <div class="columns is-vcentered">
            {% for sponsor in tier[1] %}
              <div class="column">
                  <div class="sponsor_icon">
                      <a href="{{ sponsor.link }}">
                          <img src="{{ sponsor.icon }}">
                      </a>
                  </div>
                  <div class="sponsor_info">
                      {{ sponsor.description | newline_to_br}}
                  </div>
              </div>
            {% endfor %}
          </div>
      </div>
    </div>
  </div>
  {% endfor%}
</div>