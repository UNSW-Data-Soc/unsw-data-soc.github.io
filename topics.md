---
layout: landing-banner
permalink: blog/topics
title: Topics
subtitle: Our blog directory, the place to find the next interesting article!
colour: is-info
---

<link rel="stylesheet" href="/assets/css/tags.css">
<div class="hero-body">
    <div class = "container"> 
      {% for tag in site.tags %}               
        <details>
        <summary>
          <span style="font-size:20px">{{ tag[0] }} ({{ tag[1].size }})</span>
        </summary>
            <p>
            {% for post in tag[1] %}
            <ul>
            <li><a href="{{ post.url }}"> {{ post.title }}</a> — {{ post.date | date_to_string }}
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
