---
layout: landing
title: Jobs Board
title-image: city3_left.png
---

<div class="hero-body">
  {% for type in site.data.jobs %}
  <div class="section">
    <div class="container">
      <div class="section-title-wrapper">
        <h2 class="title is-1 centered">{{ type[0] }} </h2>
          <div class="columns is-vcentered">
            {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
            {% for sponsor in type[1] %}
                {% if sponsor == None %}
                    <h2> No jobs here at the moment, stay tuned! </h2>
                    {% continue %}
                {% endif %}
                {% capture end_date %}{{sponsor.end-date | date: '%s'}}{% endcapture %}
                {% if end_date < curr_time %}
                    {% continue %}
                {% else %}
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
                {% endif %}
            {% endfor %}
          </div>
      </div>
    </div>
  </div>
  {% endfor%}
</div>

