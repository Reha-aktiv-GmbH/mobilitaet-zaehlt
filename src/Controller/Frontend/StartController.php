<?php


namespace App\Controller\Frontend;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StartController extends AbstractController
{
    /**
     * @Route("/",name="home",methods={"GET"})
     *
     * @return Response
     */
    public function index()
    {
        return $this->render('frontend/start/index.html.twig');
    }

    /**
     * @Route("/datenschutz",name="policy",methods={"GET"})
     *
     * @return Response
     */
    public function policy()
    {
        return $this->render('frontend/start/policy.html.twig');
    }

    /**
     * @Route("/impressum",name="imprint",methods={"GET"})
     *
     * @return Response
     */
    public function imprint()
    {
        return $this->render('frontend/start/imprint.html.twig');
    }
}