---
layout: default
permalink: blog/topics
---
<link rel="stylesheet" href="/assets/css/tags.css">
<section class = "hero is-info is-bold">
  <div class = "hero-body">
    <div class = "container">
      <h1 class = "title">
      Tag Index
      </h1>
    </div>
  </div>
</section>
<div class="hero-body">
    <div class = "container"> 
      <h1 class = "title">Tags</h1>
      {% for tag in site.tags %}               
      <details>
      <summary>
      {{ tag[0] }}<span> ({{ tag[1].size }})</span>
      </summary>                
          <p>
          {% for post in tag[1] %}
          <ul>
          <li><a href="{{ post.url }}"> {{post.title }}</a> — {{ post.date | date_to_string }}
          </li>
          </ul>
          {% endfor %}
          </p>

      </details>
  {% endfor %}
    </div>
</div>

<script>
function openTags(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
</script>
