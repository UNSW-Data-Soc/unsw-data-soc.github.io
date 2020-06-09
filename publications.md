---
layout: landing 
title: Publications
subtitle: Keep up with Datasoc in the wider community!
title-image: city3_left.png
introduction: 
    If you're looking to learn more about data science as a discipline, to scout out the industry - or simply wanting something interesting to read, you've come to the right place!
---
<div class = "hero-body">
<div class = "container" >
{% for item in site.data.navigation %}
{% if item.name == "Publications" %}
{% for entry in item.dropdown %}
<li><a href = "{{entry.url}}">{{entry.name}}</a></li>
{% endfor %}
{% endif %}
{% endfor %}
</div>
</div>