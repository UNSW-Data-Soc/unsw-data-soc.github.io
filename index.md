---
layout: default
title: Welcome to DataSoc
---

<style>
.hero.is-medium .hero-body {
    padding: 4rem 3rem;
}

.hero.is-large .hero-body {
    padding: 17rem 3rem 9rem;
}

.level {
    flex-flow: row wrap;
    justify-content: flex-start;
}

#contact-container {
    flex: 1 1 auto;
}

#sponsors-container {
    flex: 1 1 auto;

}

.sponsor-figure-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

.sponsor-figure {
    flex: 1 1 30%;
    padding: 10px 15px !important;

    /* Displaying logo figures */
    display: flex;
    flex-direction: column;
    justify-content: center;
}


</style>

<div class="pageloader"></div>
<div class="infraloader is-active"></div>        
<!-- Hero and Navbar -->
<div class="hero is-bold is-large" style="background-image: url('/assets/images/events/cover1.jpg'); background-position: center center; background-attachment: fixed; background-size: cover;">
    <div class="hero-body" style=" background:rgba(0,0,0,0.4);">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-offset-0 is-hero-title ">
                    <h2 class="subtitle is-4 has-text-light">Welcome to the</h2>
                    <h1 class="title is-1 is-bigger has-text-light">Data Science Society</h1> 
                    <h2 class="subtitle is-4 has-text-light">University of New South Wales</h2>
                    <p class="">
                        <a href="https://forms.gle/hLDY7bAGa1H4CV348" class="button button-cta is-bold btn-align secondary-btn raised" target="blank">Join Us!</a>
                    </p>
                    <div class="social-links pt-5">
                        {% for item in site.data.contact.Media %}
                        <a href="{{ item.link }}" target="_blank"><span class="icon has-text-light "><i class="{{ item.img_class }}"></i></span></a>
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
                <div class='box has-text-centered'>
                    {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
                    {% assign e = site.data.events.Events | sort_natural: "end-date" %}
                    {% assign last_element = e.last.end-date | date: "%s" %}
                    {% if e == None or last_element < curr_time %}
                        <h3 class="title is-1 "> We will have more events coming soon! </h3>
                    {% else %}
                        <h3 class='title is-2'>Upcoming Events</h3>
                    {% endif %}
                    <hr>
                    {% assign index = 0 %}
                    {% assign e = site.data.events.Events | sort_natural: "start-date" %}
                    {% for event in e %}
                        {% capture event_date %}{{event.end-date | date: '%s'}}{% endcapture %}
                        {% if curr_time < event_date and event.start-date != event.end-date %}
                            <ol><h4 class='has-text-black'><b><i>{{event.start-date | date:"%B %d, %Y" }} - {{event_date | date:"%B %d, %Y"}}</i></b></h4></ol>
                            {% if event.link %}
                                <ol><h4 class='subtitle is-4 has-text-black'><a href="{{event.link}}" title="Sign up here!">{{event.name}}</a></h4></ol>
                            {% else %}
                                <ol><h4 class='subtitle is-4 has-text-black'><a href="events/" title="Details coming soon!">{{event.name}}</a></h4></ol>
                            {% endif %}
                            <br>
                            {% assign index = index | plus: 1 %}
                            {% if index == 3 %}
                                {% break %}
                            {% endif %}
                        {% endif %}
                        {% if curr_time < event_date and event.start-date == event.end-date %}
                            <ol><h4 class='has-text-black'><b><i>{{event_date | date:"%B %d, %Y"}}</i></b></h4></ol>
                            {% if event.link %}
                                <ol><h4 class='subtitle is-4 has-text-black'><a href="{{event.link}}" title="Sign up here!">{{event.name}}</a></h4></ol>
                            {% else %}
                                <ol><h4 class='subtitle is-4 has-text-black'><a href="events/" title="Details coming soon!">{{event.name}}</a></h4></ol>
                            {% endif %}
                            <br>
                            {% assign index = index | plus: 1 %}
                            {% if index == 3 %}
                                {% break %}
                            {% endif %}
                        {% endif %}
                    {% endfor %}
                    <br>
                    <a href="events/" class="button button-cta is-bold btn-align secondary-btn raised">All our events!</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="hero is-bold is-medium" style="background: linear-gradient(27deg, rgba(235,226,147,1) 0%, rgba(226,182,131,1) 20%, rgba(230,154,154,1) 40%, rgba(207,162,255,1) 70%, rgba(110,204,252,1) 100%)">
    <div class="hero-body" style="background:rgba(0,0,0,0.1);">
        <div class="container">
            <div class="level">
                <div class="column is-6 is-hero-title" id="contact-container">
                    <h2 class="subtitle is-4 has-text-white">Curated content, straight to your mailbox.</h2>
                    <a href="https://unswdata.us19.list-manage.com/subscribe/post?u=8dc568d0db37b26ed75ba4d94&amp;id=01f8128da2" class="button button-cta is-bold btn-align secondary-btn raised" target="blank">Subscribe to our newsletter!</a>
                    <br><br>
                    <h2 class="subtitle is-4 has-text-white">Or get in touch with us <a href="/contact/">here</a>.</h2>
                </div>
                <div class="column is-4" id="sponsors-container">
                    <h2 class="subtitle is-4 has-text-white">Proudly sponsored by:</h2>
                    <div class="columns is-gapless sponsor-figure-container">
                        {% for tier in site.data.sponsors %}
                            {% for sponsor in tier[1] %}
                                <div class="column sponsor-figure">
                                    <figure class="image is-256x256">
                                        <a target="blank" href="{{ sponsor.link }}"><img src="{{ sponsor.icon }}"></a>
                                    </figure>
                                </div>
                            {% endfor %}
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>