---
layout: landing
title: Events
title-image: city3_left.png
introduction: This is the events page
---
<div class="hero-body">
    <div class='columns'>
        <div class="container">
            <h2 class="title is-1 centered">Upcoming Events</h2>
            {% if site.data.events.Upcoming_events == None %}
                <h2> We will have more events coming soon </h2>
            {% endif %}
            {% for event in site.data.events.Upcoming_events %}
                {% if forloop.index > 2 %}
                    {% break %}
                {% endif %}
                <ol>
                    <div class="column is-four-fifths">
                        <div class="card">
                            <div class="card-image">
                                <img src="{{event.img}}" width='800' height='251'>
                            </div>
                            <br>
                            <br>
                            <div class='media-content'>
                                <p class='subtitle is-5 has-text-centered'>{{event.description}}</p>
                                <br>
                                <p class='subtitle is-6 has-text-centered'> <a href="{{event.link}}" title="Sign up here!"> Sign up here! </a></p>
                                <br>
                            </div>
                        </div>
                    </div>
                    <br>
                </ol>
            {% endfor %}
            <br>
            <h2 class="title is-1 centered">Previous Events</h2>
            {% if site.data.events.Previous_events == None %}
                <h2> We will have more events coming soon </h2>
            {% endif %}
                <ol> 
                    {% for event in site.data.events.Previous_events %}
                        {% if forloop.index > 2 %}
                        {% break %}
                    {% endif %}
                        <h2>{{event.name}} | {{event.date}}</h2>
                        <h4>{{event.description}}</h4>
                        <br>
                    {% endfor %}
                </ol>
        </div>
        <div class='column'>
            <div class='box'>
                <h3 class='title is-4 has-text-centered'> Dates to note down </h3>
                <p>______________________________________</p>
                <br>
                {% if site.data.events.Upcoming_events == 2 %}
                    <p> Come back later for more events! </p>
                {% endif %}
                {% for event in site.data.events.Upcoming_events %}
                    {% if forloop.index > 10 %}
                        {% break %}
                    {% endif %}
                    {% if forloop.index > 2 %}
                        <ol>
                            <div class='box'>
                                <h4 class='title is-6 has-text-centered'> {{event.name}} </h4>
                                <h4> {{event.date}} | {{event.location}} </h4>
                            </div>
                            <br>
                        </ol>
                    {% endif %}
                {% endfor %}
            </div>
        </div>
    </div>
</div>