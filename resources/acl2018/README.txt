Argument Generation datasets collected from ChangeMyView, ver 1.1 (first released in May 2018, modified in Aug 2018)
Project url:

Distributed together with:

Neural Argument Generation Augmented with Externally Retrieved Evidence
Xinyu Hua and Lu Wang
Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (ACL)

If you use these datasets, please cite:

@InProceedings{hua-wang:2018:Long,
  author    = {Hua, Xinyu  and  Wang, Lu},
  title     = {Neural Argument Generation Augmented with Externally Retrieved Evidence},
  booktitle = {Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
  month     = {July},
  year      = {2018},
  address   = {Melbourne, Australia},
  publisher = {Association for Computational Linguistics},
  abstract  = {
           High quality arguments are essential elements for human reasoning and decision-making processes. However, effective argument construction is a challenging task for both human and machines. In this work, we study a novel task on automatically generating arguments of a different stance for a given statement. We propose an encoder-decoder style neural network-based argument generation model enriched with externally retrieved evidence from Wikipedia. Our model first generates a set of talking point phrases as intermediate representation, followed by a separate decoder producing the final argument based on both input and the keyphrases. 
  }
}


===== Content ======

I. Description of the datasets
II. Change log
III. Contact



===== I. Description of the datasets =====

We collect OP posts and replies from ChangeMyView, a subcommunity on reddit:
https://www.reddit.com/r/changemyview/

The datasets consist of two major parts, core and pre-training dataset. The pre-training dataset is used only for parameter initialization. 
Therefore it only contains the OP posts and target arguments. The core dataset is used for training, validation, and test on our proposed models. 
It contains the OP post, sampled evidence sentences, extracted keyphrases, and target arguments.
We also include the retrieved document titles from Wikipedia and corresponding ranked evidence sentences, to facilitate further development for evidence retrieval.

======== (1) Core dataset ========
cmv_processed/: 
    op_train.jsonlist.bz2
    op_valid.jsonlist.bz2
    op_test.jsonlist.bz2
    root_replies_train.jsonlist.bz2
    root_replies_valid.jsonlist.bz2
    root_replies_test.jsonlist.bz2

    This directory contains the filtered OP posts and root replies used to create the core dataset.
    Each OP post has a unique tid (thread id, e.g. "t3_1fv4r6"), the URL for the whole discussion thread, and the tokenized post.
    Each root replies has a unique cid (comment id, e.g. "d3cw1w8"), the tid which it belongs to, the tokenized post, karma (#upvote - #downvote), and delta from OP poster.

wikipedia_retrieval/:
    wiki_doc_retrieved_from_op_train.jsonlist.bz2
    wiki_doc_retrieved_from_op_valid.jsonlist.bz2
    wiki_doc_retrieved_from_op_test.jsonlist.bz2
    wiki_doc_retrieved_from_rr_train.jsonlist.bz2
    wiki_doc_retrieved_from_rr_valid.jsonlist.bz2
    wiki_doc_retrieved_from_rr_test.jsonlist.bz2

    This directory contains Wikipedia article titles retrieved by queries constructed from OP or root replies.
    Each OP post or root reply is first split into sentences. Query is constucted for each sentence (sometimes no query for sentence that are too short.). And we keep the top 5 retrieved articles (details described in Sec 5.1 in our paper).

reranked_evidence/:
    selected_evidence_rr_train.jsonlist.bz2
    selected_evidence_rr_valid.jsonlist.bz2
    selected_evidence_rr_test.jsonlist.bz2
    selected_evidence_op_test.jsonlist.bz2

    This directory contains selected evidence sentences and extracted keyphrases for root replies and OP posts (OP retrieved evidence is only considered in test time, because in training time we use the reply retrieved evidence as oracle). For each sentence in OP post or root reply, we consider up to ten evidence sentences and their corresponding keyphrases (details described in Sec 5.1 and Sec 5.2 in our paper).

trainable/:
    train_core_sample3.src
    train_core_sample3_arg.tgt
    train_core_sample3_kp.tgt
    valid_core_sample3.src
    valid_core_sample3_arg.tgt
    valid_core_sample3_kp.tgt

    This directory contains the data we used for training and validation. For each reply sentence we sample up to three evidence sentences and include them in the "*.src" files, separated by a special token "<ctx>". The corresponding target arguments are in "*_arg.tgt" files, and the keyphrases are in "*_kp.tgt" files.

test/:
    with_system_evidence/:
        test_system.src 
        test_system_kp.tgt

    with_oracle_evidence/:
        test.src 
        test_kp.tgt
        test_arg.tgt

    This directory contains test data we used for evaluation. "with_system_evidence/" contains OP posts and evidence sentences retrieved by using OP posts themselves. "with_oracle_evidence/" contains OP posts and evidence sentences retrieved by using gold-standard root replies (arguments).

======== (2) Pre-training dataset ========
pretrain_dataset/:
    train_pretrain.src
    train_pretrain.tgt
    valid_pretrain.src
    valid_pretrain.tgt
    test_pretrain.src
    test_pretrain.tgt

    This directory contains pre-training dataset. It includes root and non-root replies (but need to be replying directly to the OP poster), in both politics and non-politics threads. We use them to initialize a vanilla sequence-to-sequence model, therefore we do not include retrieval results for them.



===== II. Change log =====

2018/08/23: the following files have been changed because part of them (<ctx> part) are not fully tokenized. The updated files are tokenized by using nltk.word_tokenize().
    - trainable/train_core_sample3.src
    - trainable/valid_core_sample3.src
    - test/with_oracle_evidence/test.src
    - test/with_system_evidence/test_system.src

===== III. Contact =====

Should you have any question, please contact Xinyu Hua at hua.x@husky.neu.edu. 
