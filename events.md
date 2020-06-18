---
layout: default
title: Events
title-image: city3_left.png
introduction: This is the events page
---
<section class="hero is-info is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Events
      </h1>
      <br>
      <h2 class="subtitle">
      From social events to workshops to networking oppurtunities
      </h2>
    </div>
  </div>
</section>

<div class="hero-body">
    <div class='columns'>
        <div class="column is-two-thirds is-offset-0">
            <h2 class="title is-1 centered">Upcoming Events</h2>
            <h2 class="title is-3 centered">Our Next 2 Events</h2>
            {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
            {% assign e = site.data.events.Events | sort_natural: "end-date" %}
            {% assign last_element = e.last.end-date | date: "%s" %}
            {% if e == None or last_element < curr_time %}
                <h2> We will have more events coming soon </h2>
            {% endif %}
            {% assign counter = 0 %}
            {% assign e = site.data.events.Events | sort_natural: "start-date" %}
            {% for event in e %}
                {% capture event_date %}{{event.end-date | date: '%s'}}{% endcapture %}
                {% if curr_time < event_date and counter < 2%}
                    <ol>
                        <div class="card">
                            <div class="card-image">
                                <img src="{{event.img}}" width='820' height='251'>
                            </div>
                            <br>
                            <br>
                            <div class='media-content'>
                                <p class='title is-4 has-text-centered is-uppercase'> DataSoc Presents: {{event.name}}</p>
                                <br>
                                <p class='is-size-5 has-text-centered has-text-weight-light'>{{event.description}}</p>
                                <br>
                                <p class='subtitle is-6 has-text-centered'> <a href="{{event.link}}" title="Sign up here!"> Sign up here! </a></p>
                                <br>
                            </div>
                        </div>
                        <br>
                    </ol>
                    {% assign counter = counter | plus: 1 %}
                {% endif %}
            {% endfor %}
            <br>
        </div>
        <div class='column is-1'></div>
        <div class='column is-3'>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <div class='box'>
                <h3 class='title is-4 has-text-centered'> Other Upcoming Events </h3>
                <p class='has-text-centered'>______________________________________</p>
                <br>
                {% assign counter1 = 0 %}
                {% for event in e %}
                    {% capture event_date %}{{event.end-date | date: '%s'}}{% endcapture %}
                    {% if curr_time < event_date and counter1 > 1 %}
                        <ol>
                            <div class='box'>
                                <h4 class='title is-6 has-text-centered is-uppercase'> {{event.name}} </h4>
                                <p class='subtitle is-6 has-text-centered'>
                                    {{event.start-date | date:"%B %d, %Y" }} | {{event.time}}
                                </p>
                                <p class='subtitle is-6 has-text-centered'>
                                    {{event.location}}
                                </p>
                                {% if event.link != None %}
                                    <p class='subtitle is-6 has-text-centered'> <a href="{{event.link}}" title="Sign up here!"> More information here </a></p>
                                {% endif %}
                            </div>
                        </ol>
                        {% assign counter1 = counter1 | plus: 1 %}
                    {% elsif curr_time < event_date and counter1 < 2 %}
                        {% assign counter1 = counter1 | plus: 1 %}
                    {% endif %}
                {% endfor %}
                {% if counter1  <= 2 %}
                    <p class='has-text-centered'> Come back later for more events! </p>
                {% endif %}
            </div>
        </div>
    </div>
        <h2 class="title is-1 centered">Previous Events</h2>
        {% assign first_element = e.first.end-date | date: "%s" %}
        {% if e == None or first_element > curr_time %}
            <h2> We will have more events coming soon </h2>
        {% else %}
            <div class='columns'>
        {% endif %}
        {% assign e = site.data.events.Events | sort_natural: "end-date" | reverse %}
        {% assign index = 0 %}
        {% for event in e %}
            {% capture event_date %}{{event.end-date | date: '%s'}}{% endcapture %}
            {% if curr_time > event_date %}
                {% assign mod = index | modulo: 3 %}
                {% if mod == 0 and index != 0 %}
                    <div class='columns'>
                {% endif %}
                <div class='column is-4'>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-3by3">
                            <img src="{{event.img}}" alt="Placeholder image">
                            </figure>
                        </div>
                        <br>
                        <div class='media-content'>
                            <p class='title is-5 has-text-centered is-uppercase'> {{event.name}}</p>
                            {% if event.start-date != event.end-date %}
                                <p class='subtitle is-6 has-text-centered'>{{event.start-date | date:"%B %d, %Y" }} - {{event.end-date | date:"%B %d, %Y" }}</p>
                            {% else %}
                                <p class='subtitle is-6 has-text-centered'>{{event.start-date | date:"%B %d, %Y" }}</p>
                            {% endif %}
                            <br>
                        </div>
                    </div>
                </div>
                {% assign index = index | plus: 1 %}
                {% if mod == 2 %}
                    </div>
                {% endif %}
            {% endif %}
        {% endfor %}
</div>