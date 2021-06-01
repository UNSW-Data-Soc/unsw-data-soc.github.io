---
layout: default
---

<link rel="stylesheet" href="/assets/css/paginate.css">

<script type='text/javascript' src='/assets/js/paginate.js'>
</script>

<section class = "hero is-info is-bold">
  <div class = "hero-body">
    <div class = "container">
      <h1 class = "title">
      Blog
      </h1>
      <h2 class = "subtitle">
      Stay up to date with the world of data science.
      </h2>
    </div>
  </div>
</section>

<div class="hero-body">
  <div class="container">
    <nav class = "level">
      <div class = "level-left">
        <div class = "level-item">
          <div class="field is-horizontal">
              <div class = "field-label is-normal">
              <label class = "label" for="searchBox">Search</label>
              </div>
              <div class = "field-body">
                <div class = "field">
                  <p class = "control is-pulled-left">
                    <input class="input" id="searchBox" type = "text" placeholder="Search terms...">
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
            <h2 class="title is-1 centered is-size-5-mobile"><a href="{{ post.url }}" class = "has-text-info">{{ post.title }}</a></h2>
            {% if post.date %}<p> <i>Published {{ post.date | date_to_string }}</i></p>{% endif %}
            <br>
            <p class = "is-size-3-mobile">{{ post.excerpt }}</p>
            <br>
            <p><a href="{{ post.url }}"> ... Read more</a></p>
            <br>
            {% endif %}
            </div>
            {% if post.image %}
              <div class = "column">
                <span><figure class="image"><img src="{{ post.image }}" alt="" /></figure></span>
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
    numberPerPage: 10,
    goBar:true, 
    pageCounter:true, 
  };

  let filterOptions = {
    el:'#searchBox' 
  };

    paginate.init('.myTable',options,filterOptions);
</script>

