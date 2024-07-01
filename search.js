function searchQuestions() {
  var searchInput = document.getElementById('searchInput').value;
  
  var resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  for (var i = 0; i < jsonData.data.length; i++) {
    if (jsonData.data[i].question.includes(searchInput)) {
      var result = document.createElement('p');
      result.innerHTML +='<strong>（'+jsonData.data[i].section_name+'）</strong>'+highlightKeyword(jsonData.data[i].question, searchInput) + '<br>';
      //result.innerHTML += '';
      for (var j = 0; j < jsonData.data[i].option_list.length; j++) {
        result.innerHTML += jsonData.data[i].option_list[j].label + '. ' + jsonData.data[i].option_list[j].content + '<br>';
      }
	  result.innerHTML += '<span style="color:red">参考答案：' + jsonData.data[i].standard_answer+'</span>';  
      resultsDiv.appendChild(result);  
    }
  }
  if(resultsDiv.innerHTML === ''){
	  resultsDiv.innerHTML = '<p style="color:red;font-size:24px;text-align:center">未找到参考答案</p>';
  }
}

function highlightKeyword(text, keyword) {
  var regex = new RegExp(keyword, "gi");
  return text.replace(regex, '<mark>$&</mark>');
}