---
layout: paper 
title: PAIR: Planning and Iterative Refinement in Pre-trained Transformersfor Long Text Generation
permalink: /Resources/emnlp20/
---

#### _Xinyu Hua_ and Lu Wang (EMNLP 2020)

<img src="{{site.resourceurl}}/emnlp2020/emnlp2020_system.png" style="width:720px;" >

**Abstract**:

Pre-trained Transformers have enabled impressive breakthroughs in generating long and fluent text, yet their outputs are often "rambling" without coherently arranged content.
In this work, we present a novel content-controlled text generation framework, PAIR, with planning and iterative refinement, which is built upon a large model, BART. We first include content plans, with keyphrase assignment and sentence-level positioning, into BART without modifying its structure.
We then propose a refinement algorithm to gradually enhance generation quality within the sequence-to-sequence framework. Finally, we adapt BERT to automatically predict content plans.
Evaluation with automatic metrics shows that adding planning consistently improves the generation quality on three distinct domains, with on average 20 BLEU points and 12 METEOR points improvements. In addition, human judges rate our system outputs to be more relevant and coherent than comparisons without planning.

**Camera-ready coming soon!**

[[code][code_link]] [[bibtex][bib_link]]

[code_link]: https://github.com/XinyuHua/pair-emnlp2020
[bib_link]: {{ site.resourceurl }}/bibtex/emnlp2020.bib
