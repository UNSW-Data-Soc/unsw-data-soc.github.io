---
layout: default
title: Welcome to DataSoc
---
<div class="pageloader"></div>
<div class="infraloader is-active"></div>        
<!-- Hero and Navbar -->
<div class="hero is-bold is-large" style="background-image: url('/assets/images/events/cover.jpg'); background-position: center bottom; background-attachment: fixed; background-size: cover;">
    <div class="hero-body" style=" background:rgba(0,0,0,0.4);">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-offset-8 is-hero-title ">
                    <h2 class="subtitle is-4 has-text-light">Welcome to</h2>
                    <h1 class="title is-1 is-bigger has-text-light">DataSoc</h1> 
                    <h2 class="subtitle is-4 has-text-light">University of New South Wales</h2>
                    <p class="">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSffSdDlZLRMnWokOwlpKEVaaklL39nkgkjnZ0iaqdoL134nVA/viewform?usp=sf_link" class="button button-cta is-bold btn-align secondary-btn raised" target="blank">Join Us!</a>
                    </p>
                    <div class="social-links pt-5">
                        {% for item in site.data.contact.Media %}
                        <a href="{{ item.link }}"><span class="icon has-text-light "><i class="{{ item.img_class }}"></i></span></a>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="hero is-medium">
    <div class="hero-body">
        <div class="columns is-vcentered">
            <div class="column is-4">
                <div class='box has-text-centered'>
                    <h3 class='title is-2'>Recent Blog Posts</h3>
                    <hr>
                    {% for post in site.posts limit:3%}
                    {% if post.title != 404 %}
                        {% if post.date %}<ol><h4 class='has-text-black'><b> <i>{{ post.date | date_to_string }}</i></b></h4></ol>{% endif %}
                        <ol><h4 class='subtitle is-4 has-text-black'><a href="{{ post.url }}">{{ post.title }}</a></h4></ol>
                        <br>
                    {% endif %}
                    {% endfor %}
                    <a href="blog/" class="button button-cta is-bold btn-align secondary-btn raised">All our posts!</a>
                </div>
            </div>
            <div class="column is-4 has-text-centered">
                <div class="columns">
                    <div class="column is-10 is-offset-1">
                        <h4 class="subtitle is-3 has-text-black"><i>UNSW DataSoc<br>unites students with their passion for data science, machine learning and artificial intelligence.</i></h4>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class='box  has-text-centered'>
                    <hr style="border-radius: 5px;">
                        {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
                        {% assign e = site.data.events.Events | sort_natural: "end-date" %}
                        {% assign last_element = e.last.end-date | date: "%s" %}
                        {% if e == None or last_element < curr_time %}
                            <h3 class="title is-1 centered"> We will have more events coming soon! </h3>
                        {% else %}
                            <h3 class='title is-2'>Dates to note down </h3>
                        {% endif %}
                        {% assign index = 0 %}
                        {% assign e = site.data.events.Events | sort_natural: "start-date" %}
                        {% for event in e limit: 2%}
                            {% capture event_date %}{{event.end-date | date: '%s'}}{% endcapture %}
                            {% if curr_time < event_date %}
                                <ol><h4 class='subtitle is-4 has-text-black'>{{event.name}}</h4></ol>
                                <ol><p class='subtitle is-6 has-text-centered'><a href="{{event.link}}" title="Sign up here!"> More Information Here!</a></p></ol>
                                <br>
                            {% endif %}
                        {% endfor %}
                    <a href="events/" class="button button-cta is-bold btn-align secondary-btn raised">All our events!</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="hero is-bold is-medium" style="background-image: url('/assets/images/events/ibm.jpg'); background-position: center bottom; background-attachment: fixed; background-size: cover;">
    <div class="hero-body" style="background:rgba(0,0,0,0.6);">
        <div class="container">
            <div class="level">
                <div class="column is-6 is-hero-title">
                    <h2 class="subtitle is-4 has-text-white">Curated content, straight to your mailbox.</h2>
                    <a href="https://unswdata.us19.list-manage.com/subscribe/post?u=8dc568d0db37b26ed75ba4d94&amp;id=01f8128da2" class="button button-cta is-bold btn-align secondary-btn raised" target="blank">Subscribe to our newsletter!</a>
                    <br><br>
                    <h2 class="subtitle is-4 has-text-white">Or get in touch with us <a href="/contact/">here</a>.</h2>
                </div>
                <div class="column is-4">
                    <h2 class="subtitle is-4 has-text-white">Proudly sponsored by:</h2>
                    {% for tier in site.data.sponsors %}
                    <div class="columns is-gapless">
                        {% for sponsor in tier[1] %}
                        <div class="column">
                            <figure class="image is-256x256">
                                <a target="blank" href="{{ sponsor.link }}"><img src="{{ sponsor.icon }}"></a>
                            </figure>
                        </div>
                        {% endfor %}
                    </div>
                    {% endfor%}
                </div>
            </div>
        </div>
    </div>
</div>