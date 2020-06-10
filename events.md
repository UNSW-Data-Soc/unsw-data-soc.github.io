---
layout: landing
title: Events
title-image: city3_left.png
introduction: This is the events page
---
<div class="hero-body">
    <div class='columns'>
        <div class="column is-two-thirds is-offset-0">
            <h2 class="title is-1 centered">Upcoming Events</h2>
            {% if site.data.events.Upcoming_events == None %}
                <h2> We will have more events coming soon </h2>
            {% endif %}
            {% for event in site.data.events.Upcoming_events limit:2 %}
                <ol>
                    <div class="card">
                        <div class="card-image">
                            <img src="{{event.img}}" width='820' height='251'>
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
                    <br>
                </ol>
            {% endfor %}
            <br>
            <h2 class="title is-1 centered">Previous Events</h2>
            {% if site.data.events.Previous_events == None %}
                <h2> We will have more events coming soon </h2>
            {% endif %}
            {% for event in site.data.events.Previous_events limit:2 %}
                <ol>
                    <div class="card">
                        <div class="card-image">
                            <img src="{{event.img}}" width='820' height='251'>
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
                    <br>
                </ol>
            {% endfor %}
            <br>
        </div>
        <div class='column is-1'>
        </div>
        <div class='column is-3'>
            <br>
            <br>
            <br>
            <div class='box'>
                <h3 class='title is-4 has-text-centered'> Dates to note down </h3>
                <p>______________________________________</p>
                <br>
                {% if site.data.events.Upcoming_events.size <= 2 %}
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
                                <h4 class='has-text-centered'> {{event.date | date: "%b %d %Y"}} | {{event.location}}</h4>
                            </div>
                            <br>
                        </ol>
                    {% endif %}
                {% endfor %}
            </div>
        </div>
    </div>
</div>
<script src="/assets/js/require.js">
</script>
<script>
    const fs = require('fs');
    const yaml = require('js-yaml');
    window.alert(99);
    try {
        var curr_date = new Date().getTime();
        //console.log(curr_date);
        let fileContents = fs.readFileSync('_data/events.yml', 'utf8');
        var data = yaml.safeLoad(fileContents);
        document.write(data);
        window.alert(99);
        // sorts the data (most earliest date to latest)
        if (data.Upcoming_events != null) {
            data.Upcoming_events.sort(function(a,b){return a.date.getTime() - b.date.getTime()});
            var x = 0;
            while (data.Upcoming_events[x].date.getTime() <= curr_date) {
                if (data.Previous_events == null) {
                    data.Previous_events = [data.Upcoming_events[x]];
                    data.Upcoming_events.shift();
                }
                else {
                    data.Previous_events.push(data.Upcoming_events[x]);
                    data.Upcoming_events.shift();
                }       
            } 
        }
        if (data.Previous_events != null) {
            // sort previous events such that the most recent one is first
            data.Previous_events.sort(function(a,b){return b.date.getTime() - a.date.getTime()});
        }
        // writing data into file        
        let yamlStr = yaml.safeDump(data);
        fs.writeFileSync('_data/events.yml', yamlStr, 'utf8');
    } catch (e) {
        console.log(e);
    }
</script>