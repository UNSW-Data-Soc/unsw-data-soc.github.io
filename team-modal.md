---
layout: landing
title: Our Team
title-image: city2_left.png
permalink: /about/team-modal/
introduction: |
  Surprisingly, even in this era of automation, UNSW DataSoc is still managed by a team of longwithstanding, soon-to-be-obsolete humans.
  <br><br>
  We are, however, all extremely proud to be a part of this amazing society to help other students develop skills and knowledge in data science and artificial intelligence.
  <br><br>
  <b><i>TODO:</i></b>
  <br>
  <ul><li>Get nice photos of everyone</li><li>Get a quote/q&a from everyone</li></ul>
---

<div class="hero-body">
	<div class="tabs is-boxed is-centered main-menu is-large" id="nav">
		<ul>
			<li data-target="pane-1" id="1" class="is-active">
				<a><h2 class="title is-3">Execs</h2></a>
			</li>
			<li data-target="pane-2" id="2">
				<a><h2 class="title is-3">External</h2></a>
			</li>
			<li data-target="pane-3" id="3">
				<a><h2 class="title is-3">Internal</h2></a>
			</li>
			<li data-target="pane-4" id="4">
				<a><h2 class="title is-3">Postgrad</h2></a>
			</li>
		</ul>
	</div>
	<div class="tab-content">
	{% for portfolio in site.data.team %}
		{% if forloop.first == true %}
			{% assign active_status = "is-active" %}
		{% else %}
			{% assign active_status = "" %}
		{% endif %}
		<div class="tab-pane {{ active_status }}" id="pane-{{ forloop.index }}">
			<div class="content">
				<div class="container">
					{% assign remaining_people = portfolio[1].size %}
					{% for person in portfolio[1] %}
					{% assign value = forloop.index0 | modulo: 4 %}
					{% if value == 0 %}
						{% if forloop.index0 != 0 %}
					</div>
						{% endif %}
					<div class="columns">
						{% if remaining_people == 2 %}
					<div class="column is-3">
					</div>
						{% endif %}
					{% endif %}
						<div class="column is-3">
							<div class="card">
								<div class="card-image is-square">
								  <figure class="image is-256x256">
									<img src="{{ person.image | prepend: '/assets/images/team/' }}" alt="Placeholder image">
								  </figure>
								</div>
								<div class="card-content">
								  <div class="media">
									<div class="media-content">
									  <p class="title is-4">{{ person.name }}</p>
									  <p class="subtitle is-5">{{ person.position }}</p>
									  <p class="subtitle is-6">{{ person.degree }}</p>
									</div>
								  </div>
								  <div class="content">
									<button class="button is-info is-outlined" id="btn-{{ person.name | replace: ' ', '-' | downcase }}">Who am I?</button>
								  </div>
								</div>
							  </div>
						</div>
						<div class="modal" id="myModal-{{ person.name | replace: ' ', '-' | downcase }}">
							<div class="modal-background"></div>
							<div class="modal-card">
								    <header class="modal-card-head">
										<p class="modal-card-title">{{ person.name }}</p>
										<button class="delete" aria-label="close" data-bulma-modal="close"></button>
									</header>
									<section class="modal-card-body">
										<div class="content">
											<h1>Hello World</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
											<h2>Second level</h2>
											<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
											<ul>
											<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
											<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
											<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
											<li>Ut non enim metus.</li>
											</ul>
											<h3>Third level</h3>
											<p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
										</div>
									</section>
									<footer class="modal-card-foot">
										<button class="button is-outlined" data-bulma-modal="close">Close</button>
									</footer>
							</div>
						</div>
					{% assign remaining_people = remaining_people | minus: 1 %}
					{% endfor %}
					</div>
				</div>
			</div>
		</div>
	{% endfor %}
</div>
<script src="/assets/js/custom.js"></script>