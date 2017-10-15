const $experience = [
  { title: 'IT Project Manager',
    company: 'DR Horton, INC',
    dates: 'Nov 2015 - Present',
    responsibilities: ["Project lead for Mortgage QC systems",
      "Supervise junior business analyst",
      "Report project KPI's to executive management"
    ]
  },
  { title: 'Data Analytics Specialist',
    company: 'Global Financial Review',
    dates: 'Apr 2014 - Oct 2015',
    responsibilities: ["Directed data quality and reporting processes",
      "Defined system changes as requested by end users",
      "Assisted with SQL and VBA coding"
    ]
  },
  { title: 'Business Analyst',
    company: 'DR Horton, INC',
    dates: 'Jul 2014 - Mar 2014',
    responsibilities: ["Project support and training for Mortgage QC systems",
      "Designed and wrote SSRS reports",
      "Administered audit system profiles and settings"
    ]
  },
  { title: 'Systems Analyst',
    company: 'EZCORP',
    dates: 'Jul 2008 - Jun 2011',
    responsibilities: ["Documented system enhancements for EZMONEY loan platform",
      "Assisted with testing and defect resolution efforts"
    ]
  },
  { title: 'Business Analyst',
    company: 'Guaranty Bank',
    dates: 'Jun 2006 - Jul 2008',
    responsibilities: ["Provided 24 x 7 technical support for EFT services systems",
      "Technical lead for wire transfer and ACH processing systems"
    ]
  }
];

function renderExperience(index) {
  $('#exp-container').empty();
  $('#exp-container').append('<div><h3>' + index.title +'</h3>\
    <h4>' + index.company + '</h4>\
    <h5>' + index.dates +'</h5></div>\
    <div><ul></ul></div>');
  for (var e in index.responsibilities) {
    $('#exp-container ul').append('<li>' + index.responsibilities[e] + '</li>');
  }
}

$(document).ready(function(){
  renderExperience($experience[0]);

  $('.fa-chevron-right').click(function(){
    var $job = $(this).attr('data-index');
    renderExperience($experience[$job]);
    if($('.fa-chevron-right').attr('data-index') == 4){
      $('.fa-chevron-right').css({"color":"var(--base)"});
    }
    if($('.fa-chevron-right').attr('data-index') < 4){
      $('.fa-chevron-left').css({"color":"var(--light)"});
      $('.fa-chevron-right').attr('data-index',parseInt($job) + 1);
      $('.fa-chevron-left').attr('data-index',parseInt($job));
    }
  });

  $('.fa-chevron-left').click(function(){
    var $job = $(this).attr('data-index');
    renderExperience($experience[$job]);
    if($('.fa-chevron-left').attr('data-index') == 0){
      $('.fa-chevron-left').css({"color":"var(--base)"});
    }
    if($('.fa-chevron-left').attr('data-index') > 0){
      $('.fa-chevron-right').css({"color":"var(--light)"});
      $('.fa-chevron-right').attr('data-index', parseInt($job));
      $('.fa-chevron-left').attr('data-index', parseInt($job - 1));
    }
  });

});
