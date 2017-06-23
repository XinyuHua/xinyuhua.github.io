Idebate Supporting Argument Annotation Dataset (first released on May 2017)
URL: http://xinyuhua.github.io/resources/acl2017/annotation.json

This dataset is distributed together with:

Understanding and Detecting Supporting Arguments of Diverse Types
Xinyu Hua and Lu Wang
Proceedings of the 55nd Annual Meeting of the Association for Computational Linguistics (ACL), short paper, 2017.

==== Content ====

I. Description of the dataset
II. Contact

==== I. Description of the dataset ====

The dataset is in JSON format named as annotation.json .

It contains annotation labels for 200 topics on Idebate. Labels are chosen from "factual, study, opinion, reasoning". Details about how we choose labels and how we conduct annotation can be found in the paper mentioned above. 

>> Data structure

This json file contains a list of 200 elements, each containing annotations and document content for one topic. Each element is a python dictionary with the following entries:

_topic_ID: a unique ID for each topic, ranging from 0 to 199. (Integer)
_topic_name: topic string. (String)
_annotation: a list of annotated citation documents. Each has the following entries. (list)
_doc_title: title of the citation document. (String)
_claim_name: claim that cites this document. (String)
_citing_sentence: sentence used by human editors when citing this document. (String)
_doc_body: a list of sentences in the document. (list of String)
_labeled_lineIDs: a list of line IDs that are labeled by annotators. (list of Integer)
_labels: a list of labels corresponding to _labeled_lineIDs. (list of list of String)
_split: portion of data partition, one of 'train', 'valid', and 'test'. (String)


====  II. Contact ====

Should you have any questions, please contact hua.x@husky.neu.edu (Xinyu Hua)
