<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Symfony\Component\Serializer\SerializerInterface;

class SerializerExtension extends AbstractExtension
{
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * Define custom Twig filters.
     * @return TwigFilter[]
     */
    public function getFilters(): array
    {
        return [
            new TwigFilter('jsonld', [$this, 'serializeToJsonLd'], ['is_safe' => ['html']]), // define jsonld filter
        ];
    }

    /**
     * Serialize data to JSON-LD format using Symfony's Serializer.
     * @param $data
     * @return string
     */
    public function serializeToJsonLd($data): string
    {
        return $this->serializer->serialize($data, 'jsonld'); // convert data to jsonld format
    }

}
