---
layout: landing-banner
title: Jobs Board
subtitle: Are you interested in gaining real-world experience to apply knowledge learnt in your degree and fast forward your career? Keep an eye out for internship and graduate opportunities that are constantly updated on this page!
colour: is-warning
---

<!-- MAKE SURE UPLOADED IMAGES ARE SQUARE -->

<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
<div class="hero-body background-shade">
    <h2 class="title is-1 centered">Upcoming Jobs</h2>
    <div class = 'columns'>
    <div class = 'column is-5 is-centered'>
    <h2 class='subtitle is-6' >Tags</h2>
    {% for tag in site.data.job_tags %}
    <label class="checkbox">
        <input type="checkbox" class="job-tag"> {{ tag }}
    </label>
    {% endfor %}
    </div>
    <div class = 'column is-7'>
    {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
    {% assign e = site.data.jobs.Jobs | sort_natural: "end-date" %}
    {% assign last_element = e.last.end-date | date: "%s" %}
    {% if e == None or last_element < curr_time %}
        <h2> We will have more jobs coming soon, stay tuned! </h2>
    {% else %}
        {% assign index = 0 %}
        {% assign e = site.data.jobs.Jobs | sort_natural: "end-date" %}
        <br><br>
        <div class = 'columns is-multiline'>
                {% for job in e %}
                {% capture end_date %}{{job.end-date | date: '%s'}}{% endcapture %}
                {% if curr_time < end_date %}
                <div class = 'column is-9'>
                <div class = 'card search'>
                    <div class = "card-content">
                    <div class = "columns">
                    <div class = "column is-7">
                    {% if job.name != 404 %}
                    <h2 class="title is-5 centered is-size-5-mobile"><a href="{{ post.link }}" class = "has-text-info">{{ job.name }}</a></h2>
                    <br>
                    <p class='subtitle is-6 has-text-centered'>Closing Date: {{job.end-date | date:"%B %d, %Y" }}</p>
                    <br>
                    <div  class = "content" style="text-align: center;">
                        {% if job.description %}
                            <span class="button modal-button" data-target="job-- {{ job.name | replace: ' ', '-' | downcase }}">
                            <p class='subtitle is-6 has-text-centered'>More Information Here!</p>
                            </span>
                            {% include job-modal-card.html name = job.name description = job.description link = job.link %}
                        {% endif %}
                    </div>
                    <br>
                    {% endif %}
                    </div>
                    {% if job.img %}
                    <div class = "column is-5">
                        <span><figure class="image is-96x96"><img src="{{ job.img }}" alt="" /></figure></span>
                    <br><br>
                            <div class='c-footer'>
                            {% for r in job.tags %}
                                <span class = 'tag is-light' style='margin: 1%;'>{{ r }}</span>
                            {% endfor %}
                            </div>
                    </div>
                    <br>
                    {% endif %}
                </div>
                </div>
                </div>
                </div>
                {% endif %}
                {% endfor %}
    </div>
    </div>
    </div>
 <!--        {% for job in e %}
            {% capture end_date %}{{job.end-date | date: '%s'}}{% endcapture %}
            {% if curr_time < end_date %}
                {% assign mod = index | modulo: 4 %}
                {% if mod == 0 and index != 0 %}
                    <div class='columns'>
                {% endif %}
                <div class='column is-3'>
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-1by1">
                            {% if job.img %}
                            <a href="{{job.link}}">
                                <img src="{{job.img}}" alt="Placeholder image">
                            </a>
                            {% endif %}
                            </figure>
                        </div>
                        <br>
                        <div class='card-content'>
                            <p class='title is-4 has-text-centered'> {{job.name}} </p>
                            <p class='subtitle is-6 has-text-centered'>Closing Date: {{job.end-date | date:"%B %d, %Y" }}</p>
                             <div  style="text-align: center;">
                                {% if job.description %}
                                    <span class="button modal-button" data-target="job-- {{ job.name | replace: ' ', '-' | downcase }}">
                                    <p class='subtitle is-6 has-text-centered'>More Information Here!</p>
                                    </span>
                                    {% include job-modal-card.html name = job.name description = job.description link = job.link %}
                                {% endif %}
                            </div>
                            <br>
                        </div>
                    </div>
                </div>
                {% assign index = index | plus: 1 %}
                {% if mod == 3 %}
                    </div>
                {% endif %}
            {% endif %}
            {% endfor %}
            {% if mod != 3 %}
                </div>
            {% endif %}
            {% endif %} -->
<br>
<br>
<script src="/assets/js/modals.js"></script>


<script>
let jobs = document.getElementsByClassName('search')
function tags_are_checked(checkboxes, tags) {
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            checkbox_text = checkbox.parentElement.innerText;
            checkbox_text = checkbox_text.substring(1,);
            if (tags.search(checkbox_text) != -1) {
                return true;
            } 
        }
    }
    return false;
}

function no_boxes_checked(checkboxes) {
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            return false;
        }
    }
    return true;
}


let checkboxes = document.getElementsByClassName('job-tag');
for (let checkbox of checkboxes) {
    checkbox.onclick = function() {

        // Reset checkboxes if all unticked
        if (no_boxes_checked(checkboxes)) {
            console.log('hey')
            for (let job of jobs) {
                jobs.style.display = "";
            }
        } else {

            //For each resource card check if tags belong to set of ticked checkboxes
            for (let job of jobs) {
                    let tags = job.getElementsByClassName('c-footer')[0].innerText;
                    if (tags_are_checked(checkboxes,tags)) {
                        job.style.display = "";
                    } else {
                        job.style.display = "none";
                    }
            }
        }
    }
}
</script>

