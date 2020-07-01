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
      Stay up to date
      </h2>
    </div>
  </div>
</section>

<div class="hero-body">
  <div class="container">
  <div class = "panel">
      <div class = "body">
        <nav class = "level">
          <div class = "level-left">
            <div class = "level-item">
              <div class="field is-horizontal is-left">
                  <div class = "field-label is-normal is-pulled-left">
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
      </div>
    </div>
    <br>
    <table class="table-borderless is-fullwidth  myTable">
        <tbody>
        {% for post in site.posts %}
        <tr>
          <td>
            {% if post.title != 404 %}
            <h2 class="title is-1 centered"><a href="{{ post.url }}" class = "has-text-info">{{ post.title }}</a></h2>
            {% if post.date %}<p> <i>Published {{ post.date | date_to_string }}</i></p>{% endif %}
            <br>
            <p>{{ post.excerpt }}</p>
            <br>
            <p><a href="{{ post.url }}"> ... Read more</a></p>
            <br>
            {% endif %}
          </td>
          {% if post.image %}
          <td>
          <figure class="image"><img src="{{ post.image }}" alt="" /></figure>
          </td>
          {% endif %}
        </tr>
        {% endfor %}
        </tbody>
    </table>
  </div>
</div>


<script>

  let options = {
    numberPerPage: 4,
    goBar:true, 
    pageCounter:true, 
  };

  let filterOptions = {
    el:'#searchBox' 
  };

    paginate.init('.myTable',options,filterOptions);
</script>

