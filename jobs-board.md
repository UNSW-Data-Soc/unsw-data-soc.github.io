---
layout: landing-banner
title: Jobs Board
subtitle: Are you interested in gaining real-world experience to apply knowledge learnt in your degree and fast forward your career? Keep an eye out for internship and graduate opportunities that are constantly updated on this page!
---

<!-- MAKE SURE UPLOADED IMAGES ARE SQUARE -->

<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
<div class="hero-body background-shade">
    <!-- <h2 class="title is-1 centered">Upcoming Jobs</h2> -->
    <div class = "columns">
        <div class = "column is-2" style="margin-left:2%">
            <div class="field is-horizontal">
                <div class = "field-label is-normal">
                    <label class = "label" for="searchBox">Search</label>
                </div>
                <div class = "field-body">
                    <div class = "field">
                    <p class = "control is-pulled-left">
                        <input class="input" id="searchBox" type = "text" placeholder="Search terms...">
                    </p>
                    </div>
                </div>
            </div>
            <br><br>
            <h2 class="subtitle is-6"><b>Tags</b></h2>
            {% for tag in site.data.job_tags %}
            <label class="checkbox">
                <input type="checkbox" class="job-tag"> {{ tag }}
            </label>
            <br>
            {% endfor %}
        </div>
    {% capture curr_time %}{{site.time | date: '%s'| minus: 86400}}{% endcapture %}
    {% assign e = site.data.jobs.Jobs | sort_natural: "end-date" %}
    {% assign last_element = e.last.end-date | date: "%s" %}
    {% if e == None or last_element < curr_time %}
        <div class = "column is-10 is-offset-3">
            <p style="font-size:24px"> We will have more jobs coming soon, stay tuned! </p>
        </div>
    {% else %}
        <div class = "column is-10">
        {% assign index = 0 %}
        {% assign e = site.data.jobs.Jobs | sort_natural: "end-date" %}
        <br><br>
        <div class = "columns is-multiline is-centered">
            {% for job in e %}
            {% capture end_date %}{{job.end-date | date: '%s'}}{% endcapture %}
            {% if curr_time < end_date %}
            <div class = "column is-5">
            <div class = "card search">
                <div class = "card-content">
                <div class = "columns">
                <div class = "column is-8">
                {% if job.name != 404 %}
                    <h2 class="title is-5 centered is-size-5-mobile"><a href="{{ job.link }}" class = "has-text-info">{{ job.name }}</a></h2>
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
                    <div class = "column is-4">
                        <span><figure class="image is-128x128"><img src="{{ job.img }}" alt="" /></figure></span>
                    <br>
                    <div class='c-footer'>
                    {% for r in job.tags %}
                        <span class = 'tag is-light' style='margin: 1%;'>{{ r }}</span>
                    {% endfor %}
                    </div>
                    </div>
                {% endif %}
            </div>
            </div>
            </div>
            </div>
            {% endif %}
            {% endfor %}
    </div>
    </div>
    {% endif %}
    </div>
<br>
<br>
<script src="/assets/js/modals.js"></script>


<script>
let jobs = document.getElementsByClassName('search')
let search_box = document.getElementById('searchBox');
search_box.setAttribute("onkeyup","filter_search()")

function filter_search(word) {
    word = search_box.value;
    if (word == "") {

        for (let job of jobs) {
            job.style.display = "";
        }

    } else {

        word = word.toLowerCase();
        for (let job of jobs) {
            let str = job.getElementsByClassName('title')[0].innerText;
            str = str.toLowerCase();
            let pos = str.search(word);
            if (pos == -1) {
                job.style.display = "none";
            }
        }
    } 
}

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
            for (let job of jobs) {
                jobs.style.display = "";
            }
        } else {

            // For each resource card check if tags belong to set of ticked checkboxes
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