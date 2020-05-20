---
layout: page
title: DataSoc Blog
title-image: city3_left.png
introduction: THIS IS OUR FRESH NEW BLOG
---

<div class="hero-body">
  <div class="container">
    {% for post in site.posts %}
      {% if post.title != 404 %}
          <h2 class="title is-1 centered"><a href="{{ post.url }}">{{ post.title }}</a></h2>
          {% if post.date %}<p> <i>Published {{ post.date | date_to_string }}</i></p>{% endif %}
          <br>
        {% if post.image %}<span class="image main"><img src="{{ site.baseurl }}/{{ post.image }}" alt="" /></span>{% endif %}
        <p>{{ post.excerpt }}</p>
        <br>
        <p><a href="{{ post.url }}"> ... Read more</a></p>
        <br>
      {% endif %}
    {% endfor %}
  </div>
</div>