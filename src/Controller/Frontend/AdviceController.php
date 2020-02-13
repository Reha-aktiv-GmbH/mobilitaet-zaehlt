<?php
/**
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * App\Controller\Frontend\AdviceController.php
 */

namespace App\Controller\Frontend;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
class AdviceController extends AbstractController
{
    /**
     * @Route("/kaufberatung-elektromobil",name="scooter-advice",methods={"GET"})
     *
     * @return Response
     */
    public function scooter()
    {
        return $this->render('frontend/static/scooter.advice.html.twig');
    }

    /**
     * @Route("/kaufberatung-rollatoren",name="rollator-advice",methods={"GET"})
     *
     * @return Response
     */
    public function rollator()
    {
        return $this->render('frontend/static/rollator.advice.html.twig');
    }
}