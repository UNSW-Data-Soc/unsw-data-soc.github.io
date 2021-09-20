---
layout: landing-banner
title: Blog
subtitle: Stay in the loop with our weekly blog post!
colour: is-info
---

<link rel="stylesheet" href="/assets/css/paginate.css">

<script type='text/javascript' src='/assets/js/paginate.js'>
</script>

<div class="hero-body">
  <div class="container">
    <nav class = "level">
      <div class = "level-left">
        <div class = "level-item">
          <div class="field is-horizontal">
              <div class = "field-label is-normal">
              <label class = "label" style="margin-left: 1000px;" for="searchBox">Search</label>
              </div>
              <div class = "field-body">
                <div class = "field">
                  <p class = "control is-pulled-left">
                    <input class="input" id="searchBox" type = "text" placeholder="What are you looking for?" size="30">
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </nav>
    <div class = "body">
    <table class="table overflow myTable">
        <tbody>
        {% for post in site.posts %}
        <tr>
          <td>
            <div class = "columns">
            <div class = "column">
            {% if post.title != 404 %}
            <h2 class="title is-2 centered is-size-6-mobile"><a href="{{ post.url }}" class = "has-text-info">{{ post.title }}</a></h2>
            {% if post.date %}<p> <i>Published {{ post.date | date_to_string }}</i></p>{% endif %}
            <br>
            <p class = "is-size-5-mobile">{{ post.excerpt }}</p>
            <br>
            <p><a href="{{ post.url }}"> ... Read more</a></p>
            <br>
            {% endif %}
            </div>
            {% if post.image %}
              <div class = "column">
                <span><figure class="image"><img src="{{ post.image }}" alt=""/></figure></span>
              </div>
              <br><br>
            {% endif %}
          </div>
          </td>
        </tr>
        {% endfor %}
        </tbody>
    </table>
    </div>
  </div>
</div>


<script>

  let options = {
    numberPerPage: 20,
    goBar:true, 
    pageCounter:true, 
  };

  let filterOptions = {
    el:'#searchBox' 
  };

    paginate.init('.myTable',options,filterOptions);
</script>

