<?php

namespace Chuva\Php\WebScrapping;

use Chuva\Php\WebScrapping\Entity\Paper;
use Chuva\Php\WebScrapping\Entity\Person;
use DOMXPath;

/**
 * Does the scrapping of a webpage.
 */
class Scrapper {

  /**
   * Loads paper information from the HTML and returns the array with the data.
   */
  public function scrap(\DOMDocument $dom): array {
    // Filter a elements with paper-card class with xPath
    $paperCards = (new DOMXPath($dom))->query("//a[contains(@class, 'paper-card')]"); 

    foreach ($paperCards as $paperCard) {
        $this->extractPaper($paperCard);
    }

    return [
      new Paper(
        123,
        'The Nobel Prize in Physiology or Medicine 2023',
        'Nobel Prize',
        [
          new Person('Katalin Karikó', 'Szeged University'),
          new Person('Drew Weissman', 'University of Pennsylvania'),
        ]
      ),
    ];
  }

  function extractPaper(\DOMElement $paperCard): Paper {
    // Get id and type using XPath
    $dom = new \DOMDocument();
    $dom->appendChild($dom->importNode($paperCard, true));
    $xpath = new DOMXPath($dom);

    $id = $xpath->query("//div[@class='volume-info']")[0]->nodeValue;
    $type = $xpath->query("//div[@class='tags mr-sm']")[0]->nodeValue;

    // Get title
    $title = $paperCard->getElementsByTagName('h4')[0]->nodeValue;

    // Get authors
    $authorElements = $paperCard->getElementsByTagName('span');
    $authors = [];
    foreach ($authorElements as $author){
        $name = $author->nodeValue;
        $institution = $author->getAttribute('title');
        array_push(
            $authors, 
            new Person($name, $institution)
        );
    }

    return new Paper(
        $id,
        $title,
        $type,
        $authors
      );
  }
}
