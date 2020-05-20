---
layout: landing
title: Our Team
title-image: city2_left.png
permalink: /about/team/
introduction: |
  Surprisingly, even in this era of automation, UNSW DataSoc is still managed by a team of longwithstanding, soon-to-be-obsolete humans.
  <br><br>
  We are, however, all extremely proud to be a part of this amazing society to help other students develop skills and knowledge in data science and artificial intelligence.
  <br><br>
  And while our icons below might looks like a bunch of Batmans and Deadpools, we are actually real people and we're always up for a chat!
  <br><br>
  (Batman and Deadpool not permanent. Real pictures and descriptions coming!)
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
		<div class="tab-pane is-active" id="pane-1">
			<div class="content">
				<div class="content-wrapper">
					{% for person in site.data.team.Execs %}
					{% if forloop.first %}
					<div class="columns">
						<div class="column is-3"></div>
					{% else %}
						{% assign value = forloop.index0 | modulo:2 %}
						{% if value == 0 %}
						<div class="column is-3"></div>
					</div>
					<div class="columns">
						<div class="column is-3"></div>
						{% endif %}
					{% endif %}
						<div class="column is-3">
							<div class="card">
								<div class="card-image">
								  <figure>
									<img src="{{ person.image }}" alt="Placeholder image">
								  </figure>
								</div>
								<div class="card-content">
								  <div class="media">
									<div class="media-content">
									  <p class="title is-4">{{ person.name }}</p>
									  <p class="subtitle is-6">{{ person.degree }}</p>
									</div>
								  </div>
							  
								  <div class="content">
									{{ person.description }}
								  </div>
								</div>
							  </div>
						</div>
					{% endfor %}
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane" id="pane-2">
			<div class="content">
				<div class="content-wrapper">
					{% for person in site.data.team.External %}
					{% if forloop.first %}
					<div class="columns">
						<div class="column is-3"></div>
					{% else %}
						{% assign value = forloop.index0 | modulo:2 %}
						{% if value == 0 %}
						<div class="column is-3"></div>
					</div>
					<div class="columns">
						<div class="column is-3"></div>
						{% endif %}
					{% endif %}
						<div class="column is-3">
							<div class="card">
								<div class="card-image">
								  <figure>
									<img src="{{ person.image }}" alt="Placeholder image">
								  </figure>
								</div>
								<div class="card-content">
								  <div class="media">
									<div class="media-content">
									  <p class="title is-4">{{ person.name }}</p>
									  <p class="subtitle is-6">{{ person.degree }}</p>
									</div>
								  </div>
							  
								  <div class="content">
									{{ person.description }}
								  </div>
								</div>
							  </div>
						</div>
					{% endfor %}
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane" id="pane-3">
			<div class="content">
				<div class="content-wrapper">
					{% for person in site.data.team.Internal %}
					{% if forloop.first %}
					<div class="columns">
						<div class="column is-3"></div>
					{% else %}
						{% assign value = forloop.index0 | modulo:2 %}
						{% if value == 0 %}
						<div class="column is-3"></div>
					</div>
					<div class="columns">
						<div class="column is-3"></div>
						{% endif %}
					{% endif %}
						<div class="column is-3">
							<div class="card">
								<div class="card-image">
								  <figure>
									<img src="{{ person.image }}" alt="Placeholder image">
								  </figure>
								</div>
								<div class="card-content">
								  <div class="media">
									<div class="media-content">
									  <p class="title is-4">{{ person.name }}</p>
									  <p class="subtitle is-6">{{ person.degree }}</p>
									</div>
								  </div>
							  
								  <div class="content">
									{{ person.description }}
								  </div>
								</div>
							  </div>
						</div>
					{% endfor %}
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane" id="pane-4">
			<div class="content">
				<div class="content-wrapper">
					{% for person in site.data.team.Postgraduate %}
					{% if forloop.first %}
					<div class="columns">
						<div class="column is-4"></div>
					{% else %}
						{% assign value = forloop.index0 | modulo:3 %}
						{% if value == 0 %}
						<div class="column is-4"></div>
					</div>
					<div class="columns">
						<div class="column is-4"></div>
						{% endif %}
					{% endif %}
						<div class="column is-4">
							<div class="card">
								<div class="card-image">
								  <figure>
									<img src="{{ person.image }}" alt="Placeholder image">
								  </figure>
								</div>
								<div class="card-content">
								  <div class="media">
									<div class="media-content">
									  <p class="title is-4">{{ person.name }}</p>
									  <p class="subtitle is-6">{{ person.degree }}</p>
									</div>
								  </div>
							  
								  <div class="content">
									{{ person.description }}
								  </div>
								</div>
							  </div>
						</div>
					{% endfor %}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>