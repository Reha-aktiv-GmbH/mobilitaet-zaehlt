<?php
/**
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * App\Controller\Core\Sitemap.php
 */

namespace App\Controller\Core;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Sitemap extends AbstractController
{
    /**
     * @Route("/sitemap.xml",name="sitemap",methods={"GET"},defaults={"_format" = "xml"})
     */
    public function show(Request $request)
    {
        $urls = [];
        $hostname = $request->getSchemeAndHttpHost();
        $urls[] = $this->generateUrl('home');
        $urls[] = $this->generateUrl('scooter-advice');
        $urls[] = $this->generateUrl('rollator-advice');
        $urls[] = $this->generateUrl('imprint');

        $response = new Response(
            $this->renderView('sitemap.html.twig', array( 'urls' => $urls,
                'hostname' => $hostname)),
            200
        );

        $response->headers->set('Content-Type', 'text/xml');

        return $response;
    }
}