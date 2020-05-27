---
layout: landing
title: Tag Index
permalink: blog/tag-index
---
<div class="hero-body">
    <div class = "container">
        <table class = "table">
                    <th>Tags<th>
            <tbody>
                {% for tag in site.tags %}
                <tr>
                    <th>                
                        <details id= "tag-{{ tag[0] }}">
                            <summary>
                            <a name="{{ tag[0] }}">{{ tag[0] }}<span>({{ tag[1].size }})</span></a>
                            </summary>
                            <ul>
                            {% for post in tag[1] %}
                                <li><a href="{{ post.url }}"> {{ post.title }}</a> — {{ post.date | date_to_string }}</li>
                            {% endfor %}
                            </ul>         
                        </details>
                    </th>
                </tr>
                {% endfor %}
            </tbody>
