---
layout: paper 
title: Sentence-Level Content Planning and Style Specification for Neural Text Generation
permalink: /Resources/emnlp19/
---

#### _Xinyu Hua_ and Lu Wang (EMNLP 2019)

<img src="{{site.resourceurl}}/emnlp2019/emnlp2019_system.png" style="width:720px;" >

**Abstract**:
Building effective text generation systems requires three critical components: content selection, text planning, and surface realization, and traditionally they are tackled as separate problems. 
Recent all-in-one style neural generation models have made impressive progress, yet they often produce outputs that are incoherent and unfaithful to the input. 
To address these issues, we present an end-to-end trained two-step generation model, where a sentence-level content planner first decides on the keyphrases to cover as well as a desired language style, followed by a surface realization decoder that generates relevant and coherent text. 
For experiments, we consider three tasks from domains with diverse topics and varying language styles: persuasive argument construction from Reddit, paragraph generation for normal and simple versions of Wikipedia, and abstract generation for scientific articles.
Automatic evaluation shows that our system can significantly outperform competitive comparisons. 
Human judges further rate our system generated text as more fluent and correct, compared to the generations by its variants that do not consider language style.


[[pdf][paper_pdf]] [[code][code_link]] [[data][data_link]] [[bibtex][bib_link]]

[paper_pdf]: {{site.resourceurl}}/emnlp2019/emnlp2019.pdf
[code_link]: https://github.com/XinyuHua/arggen-emnlp19
[bib_link]: {{ site.resourceurl }}/bibtex/emnlp2019.bib
[data_link]: https://drive.google.com/open?id=1oR5JmlsTihG8t_0FjYTGGijSgGsB9Js_
