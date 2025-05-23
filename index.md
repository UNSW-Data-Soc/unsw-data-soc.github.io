---
layout: default
title: Welcome to DataSoc
---

<style>
.hero.is-medium .hero-body {
    padding: 4rem 3rem;
}

.hero.is-large .hero-body {
    padding: 4rem 3rem 9rem;
}

.level {
    flex-flow: row wrap;
    justify-content: flex-start;
}

.preview-container {
    min-height: 100%;
}

.quote-container {
    margin-bottom: 4rem;
}

.sponsor-figure-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 2rem;
    padding-left: 2rem;
}

.sponsor-figure {
    max-width: 60%;
    margin: 2% 2rem;
}

@media (max-width: 1215px) {
    .sponsor-figure-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-content: center;
        grid-gap: 2rem;
        padding-left: 2rem;
    }
    .sponsor-figure {
        margin: 2% 2rem;
    }
}

@media (max-width: 900px) {
    .sponsor-figure-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        grid-gap: 2rem;
        padding-left: 2rem;
    }
    .sponsor-figure {
        margin: 4% 2rem;
    }
}

@media (max-width: 500px) {
    .sponsor-figure-container {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        padding-left: 2rem;
    }
    .sponsor-figure {
        margin: 6% 2rem;
    }
}

/* Old way of using flexbox

.sponsor-figure-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
}
.sponsor-figure {
    flex: 1 0 10%;
    margin: 2% 4rem;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (max-width: 700px) {
    .sponsor-figure {
        flex: 1 0 180px;
        margin: 5% 4rem;
        max-width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

@media (max-width: 400px) {
    .sponsor-figure {
        flex: 1 0 180px;
        margin: 10% 4rem;
        max-width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
} */
</style>

<div class="pageloader"></div>
<div class="infraloader is-active"></div>

<div class="hero is-bold is-large" style="background-image: url('/assets/images/datasoc-cover-photo.jpeg'); background-position: top center; background-attachment: fixed; background-size: cover; overflow: hidden;">
    <div class="hero-body" style=" background:rgba(0,0,0,0.4); height: 88vh;box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.18); z-index: 10;">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-offset-0 is-hero-title ">
                    <h2 class="subtitle is-4 has-text-light">Welcome to the</h2>
                    <h1 class="title is-1 is-bigger has-text-light">Data Science Society</h1> 
                    <h2 class="subtitle is-4 has-text-light">University of New South Wales</h2>
                    <br>
                    <p class="">
                        <a href="https://forms.gle/U5kJ1kAmodBBrU6L6" class="button button-cta is-large is-bold btn-align secondary-btn raised" target="_blank">Join Us!</a>
                    </p>
                    <div class="social-links pt-5">
                        {% for item in site.data.contact.Media %}
                        <a href="{{ item.link }}" target="_blank"><span class="icon has-text-light is-medium fas fa-lg"><i class="{{ item.img_class }}"></i></span></a>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="hero is-medium">
    <div class="hero-body background-shade">
        <div class="container">
            <div class="quote-container">
                <div class="column is-8 is-offset-2 has-text-centered">
                    <h4 class="subtitle is-3 has-text-black"><i>UNSW DataSoc<br>Uniting students with a passion for data science, machine learning and artificial intelligence.</i></h4>
                </div>
            </div>
            <div class="columns">
                <div class="column is-6">
                    <div class='preview-container box has-text-centered'>
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
                <div class="column is-6">
                    <div class='preview-container box has-text-centered'>
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
                        <a href="events/" class="button button-cta is-bold btn-align secondary-btn raised">All our events!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="hero is-medium">
    <div class="hero-body background-shade">
        <div class="container">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <div class='preview-container box has-text-centered'>
                        {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
                        {% assign jobsData = site.data.jobs.Jobs | sort_natural: "end-date" %}
                        {% assign last_element = jobsData.last.end-date | date: "%s" %}
                        {% if jobsData == None or last_element < curr_time %}
                            <h3 class="title is-1 "> We will list more jobs soon! </h3>
                        {% else %}
                            <h3 class='title is-2'>Upcoming Jobs</h3>
                        {% endif %}
                        <hr>
                        {% assign index = 0 %}
                        {% assign jobsData = site.data.jobs.Jobs | sort_natural: "start-date" %}
                        {% for job in jobsData %}
                            {% capture job_due %}{{job.end-date | date: '%s'}}{% endcapture %}
                            {% if curr_time < job_due %}
                                <ol><h4 class='has-text-black'><b><i>{{job_due | date:"%B %d, %Y"}}</i></b></h4></ol>
                                {% if job.link %}
                                    <ol><h4 class='subtitle is-4 has-text-black' style="width: 70%; margin-left: 15%"><a href="{{event.link}}" title="Apply here!">{{job.name}}</a></h4></ol>
                                {% else %}
                                    <ol><h4 class='subtitle is-4 has-text-black'><a href="events/" title="Details coming soon!">{{job.name}}</a></h4></ol>
                                {% endif %}
                                <br>
                                {% assign index = index | plus: 1 %}
                                {% if index == 3 %}
                                    {% break %}
                                {% endif %}
                            {% endif %}
                        {% endfor %}
                        <a href="jobs-board/" class="button button-cta is-bold btn-align secondary-btn raised">See our jobs board</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="hero is-bold is-medium">
    <div class="hero-body" style="background: linear-gradient(27deg, rgba(12, 107, 147, 1) 0%, rgba(43, 184, 244, 1) 100%, rgba(159, 98, 162, 0.3) 25%, rgba(228, 91, 235, 0.3) 50%, rgba(250, 90, 103, 0.3) 75%, rgba(233, 109, 56, 0.3) 100%); box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.18); z-index: 10;">
        <div class="container">
            <div class="level" styles="display: flex;">
                <div class="column is-8 is-offset-2 has-text-centered">
                    <h2 class="subtitle is-4 has-text-white">Curated content, straight to your mailbox.</h2>
                    <a href="https://unswdata.us19.list-manage.com/subscribe/post?u=8dc568d0db37b26ed75ba4d94&amp;id=01f8128da2" class="button button-cta is-bold btn-align secondary-btn raised" target="blank">Subscribe to our newsletter</a>
                    <br><br>
                    <h2 class="subtitle is-4 has-text-white">Or get in touch with us <a style="color: white; text-decoration: underline;" href="/contact/">here</a>.</h2>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="hero is-bold is-medium">
    <div class="hero-body">
        <div class="container">
            <div class="level">
                <div class="column">
                    <h2 class="subtitle is-4">Proudly sponsored by:</h2>
                    <div class="sponsor-figure-container">
                        {% for tier in site.data.sponsors %}
                            {% for sponsor in tier[1] %}
                                <div class="sponsor-figure">
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

<!-- Background gradient -->
<!-- background: linear-gradient(27deg, rgba(73, 193, 245, 0.3) 0%, rgba(159, 98, 162, 0.3) 25%, rgba(228, 91, 235, 0.3) 50%, rgba(250, 90, 103, 0.3) 75%, rgba(233, 109, 56, 0.3) 100%); -->
