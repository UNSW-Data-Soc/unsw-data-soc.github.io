---
layout: landing-banner
title: Blog
subtitle: Stay in the loop with our blog posts! From educational blogs to video blogs, they're here for you!
---
<link rel="stylesheet" href="/assets/css/paginate.css">
<link rel="stylesheet" href="/assets/css/styles.css">

<script type='text/javascript' src='/assets/js/paginate.js'>
</script>

<div class = "body">
    <div class = "blog-grid-container">
        {% for post in site.posts %}
        {% if post.title != 404 %}
            {% assign loopindex = forloop.index | modulo: 3 %}
            {% if loopindex == 1 %}
                <div class = "columns">
                    <div class = "column is-one-third">
                        <div class = "blog-module">
                            <div class="blog-thumbnail"><img src="{{ post.image }}" alt=""/></div>
                            <div class="blog-contents">
                                <h2 class="blog-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
                                {% if post.date %}
                                    <p class="blog-data">{{ post.date | date_to_string }} | {{ post.author }}</p>
                                {% endif %}
                            </div>
                            <div class="blog-description">
                                {% if post.custom_excerpt %}
                                    <p class = "1.25rem">{{ post.custom_excerpt }}</p>
                                {% else %}
                                    <p class = "1.25rem">{{ post.excerpt }}</p>
                                {% endif %}
                            </div>
                        </div>
                    </div>
            {% elsif loopindex == 2 %}
                    <div class = "column is-one-third">
                        <div class = "blog-module">
                            <div class="blog-thumbnail"><img src="{{ post.image }}" alt=""/></div>
                            <div class="blog-contents">
                                <h2 class="blog-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
                                {% if post.date %}
                                    <p class="blog-data">{{ post.date | date_to_string }} | {{ post.author }}</p>
                                {% endif %}
                            </div>
                            <div class="blog-description">
                                {% if post.custom_excerpt %}
                                    <p class = "1.25rem">{{ post.custom_excerpt }}</p>
                                {% else %}
                                    <p class = "1.25rem">{{ post.excerpt }}</p>
                                {% endif %}
                            </div>
                        </div>
                    </div>
            {% else %}
                    <div class = "column is-one-third">
                        <div class = "blog-module">
                            <div class="blog-thumbnail"><img src="{{ post.image }}" alt=""/></div>
                            <div class="blog-contents">
                                <h2 class="blog-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
                                {% if post.date %}
                                    <p class="blog-data">{{ post.date | date_to_string }} | {{ post.author }}</p>
                                {% endif %}
                            </div>
                            <div class="blog-description">
                                <p>{{ post.excerpt | truncate: 8 }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            {% endif %}
        {% endif %}
        {% endfor %}
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