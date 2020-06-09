---
layout: landing
title: DataSoc Blog
subtitle: Stay up to date
title-image: city3_left.png
introduction: 
 We cover everything from society events to community spotlights, and even Interviews with the President!
---
<script type="text/javascript" src="assets/js/paginate.js"></script>

<div class="hero-body">
  <div class="container">
    <div class="input-group">
                <label for="searchBox">Search</label>
                <input type="search" id="searchBox" placeholder="Enter your search terms here...">
    </div>
    <br>
    <table class="table is-fullwidth myTable">
        <tbody>
        {% for post in site.posts %}
        <tr>
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
        </tr>
        {% endfor %}
        </tbody>
    </table>
  </div>
</div>
<script>
  let options = {
    numberPerPage: 1,
    goBar:true, 
    pageCounter:true, 
  };
  let filterOptions = {
    el:'#searchBox' 
  };
    paginate.init('.myTable',options,filterOptions);
</script>
