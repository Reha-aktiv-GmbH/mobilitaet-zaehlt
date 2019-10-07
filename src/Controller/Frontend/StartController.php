<?php


namespace App\Controller\Frontend;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StartController extends AbstractController
{
    /**
     * @Route("/",name="home",methods={"GET"})
     */
    public function index()
    {
        return $this->render('frontend/start/index.html.twig');
    }

    /**
     * @Route("/impressum",name="imprint",methods={"GET"})
     */
    public function imprint()
    {
        return $this->render('frontend/imprint.html.twig');
    }
}