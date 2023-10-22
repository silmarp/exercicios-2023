<?php

namespace Chuva\Php\WebScrapping;

use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use Box\Spout\Common\Entity\Row;
use OpenSpout\Writer\Common\Creator\WriterEntityFactory as OpenSpoutWriterEntityFactory;
/**
 * Runner for the Webscrapping exercice.
 */
class Main {

  /**
   * Main runner, instantiates a Scrapper and runs.
   */
  public static function run(): void {
    $dom = new \DOMDocument('1.0', 'utf-8');
    $dom->loadHTMLFile(__DIR__ . '/../../assets/origin.html');

    $data = (new Scrapper())->scrap($dom);

    // Write your logic to save the output file bellow.
    $writer = OpenSpoutWriterEntityFactory::createXLSXWriter();
    $writer->openToFile('./output.xlsx');

    /*
    $cells = [
        OpenSpoutWriterEntityFactory::createCell('Carl'),
        OpenSpoutWriterEntityFactory::createCell('is not'),
        OpenSpoutWriterEntityFactory::createCell('great!'),
    ];

    $singleRow = OpenSpoutWriterEntityFactory::createRow($cells);
    $writer->addRow($singleRow);   

    */

    foreach($data as $paper) {
        $cells = [
            OpenSpoutWriterEntityFactory::createCell($paper->id),
            OpenSpoutWriterEntityFactory::createCell($paper->title),
            OpenSpoutWriterEntityFactory::createCell($paper->type),
        ];
        foreach($paper->authors as $key=>$author){
            array_push($cells, OpenSpoutWriterEntityFactory::createCell($author->name));
            array_push($cells, OpenSpoutWriterEntityFactory::createCell($author->institution));
        }
        
        $singleRow = OpenSpoutWriterEntityFactory::createRow($cells);
        $writer->addRow($singleRow);   
    }

    $writer->close();
    print_r($data);
  }

}
